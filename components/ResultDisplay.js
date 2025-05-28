import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const TaskItem = ({ task, depth = 0 }) => {
  const [expanded, setExpanded] = useState(true);
  const hasSubtasks = task.subtasks && task.subtasks.length > 0;
  
  return (
    <div className={cn("animate-fade-in", depth === 0 ? "mb-6" : "mb-3")}>
      <div 
        className={cn(
          "group flex items-start gap-3 p-3 rounded-lg transition-colors",
          "hover:bg-gray-50"
        )}
      >
        <div className="mt-0.5">
          {hasSubtasks ? (
            <button
              onClick={() => setExpanded(!expanded)}
              className="h-5 w-5 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <span className="sr-only">{expanded ? 'Collapse' : 'Expand'}</span>
              {expanded ? (
                <span className="h-0.5 w-2 bg-current" />
              ) : (
                <span className="font-medium text-xs">+</span>
              )}
            </button>
          ) : (
            <div className="h-5 w-5 rounded-full flex items-center justify-center border border-gray-300" />
          )}
        </div>
        <div className="flex-1">
          <h4 className={cn(
            "font-medium text-gray-900",
            depth === 0 ? "text-base" : "text-sm"
          )}>
            {task.title}
          </h4>
          {task.description && (
            <p className="mt-1 text-sm text-gray-600">{task.description}</p>
          )}
        </div>
      </div>
      
      {hasSubtasks && expanded && (
        <div 
          className={cn(
            "pl-8 mt-1",
            depth > 0 && "border-l border-gray-200 ml-4"
          )}
        >
          {task.subtasks.map((subtask) => (
            <TaskItem key={subtask.id} task={subtask} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const ResultDisplay = ({ tasks, isLoading }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setShowPlaceholder(true);
      }
    }, 300);
    
    if (!isLoading) {
      setShowPlaceholder(false);
    }
    
    return () => clearTimeout(timer);
  }, [isLoading]);
  
  if (!isLoading && !tasks) {
    return null;
  }
  
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 transition-all duration-300 animate-fade-in">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium">Task Breakdown</h3>
          {!isLoading && tasks && (
            <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Copy All
            </button>
          )}
        </div>
        
        {isLoading && showPlaceholder ? (
          <div className="space-y-4 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-gray-200" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded-md w-3/4" />
                  <div className="h-3 bg-gray-100 rounded-md w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : tasks ? (
          <div>
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ResultDisplay; 