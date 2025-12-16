import React, { useState } from 'react';

const DataJourneyMap = () => {
  const [activeStage, setActiveStage] = useState(null);
  const [userType, setUserType] = useState('direct');
  const [hoveredProcessor, setHoveredProcessor] = useState(null);

  const stages = [
    {
      id: 'collection',
      title: 'Collection',
      icon: '📥',
      color: '#4F46E5',
      description: 'Data enters the system',
      legalBasis: 'Art. 6(1)(b) Contractual Necessity',
      healthBasis: userType === 'direct' ? 'Art. 9(2)(a) Explicit Consent' : 'Art. 9(2)(h) Healthcare Provision',
      dataTypes: [
        { name: 'Email Address', category: 'identifier', retention: 'Account lifetime' },
        { name: 'Display Name', category: 'identifier', retention: 'Account lifetime' },
        { name: 'Clinic Reference', category: 'identifier', retention: 'Account lifetime', clinicOnly: true },
        { name: 'Device Info', category: 'technical', retention: '24 months' },
        { name: 'IP Address', category: 'technical', retention: 'Anonymized' },
      ],
      safeguards: ['TLS 1.3 encryption', 'GDPR consent capture', 'Data minimization'],
    },
    {
      id: 'processing',
      title: 'Processing',
      icon: '⚙️',
      color: '#7C3AED',
      description: 'Data transformation & use',
      legalBasis: 'Art. 6(1)(f) Legitimate Interests',
      healthBasis: 'Processing for service delivery',
      dataTypes: [
        { name: 'Tasks & Routines', category: 'user-content', retention: 'Active account' },
        { name: 'Journal Entries', category: 'health', retention: 'Active account' },
        { name: 'Mood Tracking', category: 'health', retention: 'Active account' },
        { name: 'Voice Transcriptions', category: 'user-content', retention: 'Ephemeral' },
        { name: 'Progress Metrics', category: 'health', retention: 'Active account' },
      ],
      safeguards: ['AES-256 encryption at rest', 'Row Level Security', 'Access controls'],
    },
    {
      id: 'storage',
      title: 'Storage',
      icon: '🗄️',
      color: '#2563EB',
      description: 'Secure data persistence',
      legalBasis: 'Art. 5(1)(e) Storage Limitation',
      healthBasis: 'Secure health data storage',
      dataTypes: [
        { name: 'User Database', category: 'primary', location: 'UK/EEA (Supabase)' },
        { name: 'Encrypted Backups', category: 'backup', location: 'UK/EEA' },
        { name: 'Analytics (Anonymized)', category: 'analytics', location: 'PostHog' },
      ],
      safeguards: ['SOC 2 Type II certified', 'GDPR compliant', 'Automated backups'],
    },
    {
      id: 'sharing',
      title: 'Sharing',
      icon: '🔄',
      color: '#0891B2',
      description: 'Controlled third-party access',
      legalBasis: 'Art. 28 Processor Agreements',
      healthBasis: userType === 'clinic' ? 'Healthcare provider access' : 'No health data shared',
      dataTypes: [
        { name: 'Payment Data', category: 'financial', processor: 'Stripe', shared: 'Transaction only' },
        { name: 'Push Tokens', category: 'technical', processor: 'Firebase', shared: 'Device tokens' },
        { name: 'Support Chats', category: 'communication', processor: 'Crisp', shared: 'Conversations' },
        { name: 'Clinical Reports', category: 'health', processor: 'Healthcare Provider', shared: 'Progress data', clinicOnly: true },
      ],
      safeguards: ['Standard Contractual Clauses', 'DPAs in place', 'No data selling'],
    },
    {
      id: 'retention',
      title: 'Retention',
      icon: '⏱️',
      color: '#059669',
      description: 'Time-limited storage',
      legalBasis: 'Art. 17 Right to Erasure',
      healthBasis: 'Medical record requirements',
      dataTypes: [
        { name: 'Active Account Data', category: 'active', period: 'Until deletion request' },
        { name: 'System Logs', category: 'logs', period: '24 months max' },
        { name: 'Analytics', category: 'analytics', period: 'Aggregated indefinitely' },
        { name: 'Deleted Account', category: 'deleted', period: '30 days purge' },
        { name: 'Backups', category: 'backup', period: '90 days after deletion' },
      ],
      safeguards: ['Automated deletion', 'Legal hold capability', 'Audit trails'],
    },
    {
      id: 'deletion',
      title: 'Deletion',
      icon: '🗑️',
      color: '#DC2626',
      description: 'Secure data destruction',
      legalBasis: 'Art. 17 GDPR Compliance',
      healthBasis: 'Complete erasure rights',
      dataTypes: [
        { name: 'Personal Data', category: 'personal', method: 'Secure deletion' },
        { name: 'Backups', category: 'backup', method: 'Scheduled purge' },
        { name: 'Analytics', category: 'analytics', method: 'Already anonymized' },
      ],
      safeguards: ['72-hour breach notification', '30-day response SLA', 'Verification process'],
    },
  ];

  const processors = [
    { name: 'Supabase', role: 'Database', color: '#3ECF8E', compliance: 'SOC 2 Type II, GDPR', location: 'UK/EEA' },
    { name: 'Stripe', role: 'Payments', color: '#635BFF', compliance: 'PCI DSS Level 1', location: 'USA (SCC)' },
    { name: 'Vapi AI', role: 'Voice', color: '#FF6B6B', compliance: 'Privacy-focused', location: 'Ephemeral' },
    { name: 'PostHog', role: 'Analytics', color: '#F9BD2B', compliance: 'GDPR', location: 'USA (SCC)' },
    { name: 'Crisp', role: 'Support', color: '#45B7D1', compliance: 'GDPR', location: 'EU' },
    { name: 'Firebase', role: 'Push', color: '#FFCA28', compliance: 'Google DPA', location: 'Global' },
  ];

  const userRights = [
    { right: 'Access', article: 'Art. 15', icon: '👁️' },
    { right: 'Rectification', article: 'Art. 16', icon: '✏️' },
    { right: 'Erasure', article: 'Art. 17', icon: '🗑️' },
    { right: 'Restriction', article: 'Art. 18', icon: '⏸️' },
    { right: 'Portability', article: 'Art. 20', icon: '📦' },
    { right: 'Object', article: 'Art. 21', icon: '✋' },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      identifier: '#4F46E5',
      technical: '#6B7280',
      'user-content': '#7C3AED',
      health: '#DC2626',
      financial: '#059669',
      communication: '#0891B2',
      primary: '#2563EB',
      backup: '#6B7280',
      analytics: '#F59E0B',
      active: '#059669',
      logs: '#6B7280',
      deleted: '#DC2626',
      personal: '#4F46E5',
    };
    return colors[category] || '#6B7280';
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#E2E8F0',
      padding: '40px 20px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'gridPulse 20s ease-in-out infinite',
      }} />

      {/* Floating orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 15s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        animation: 'float 12s ease-in-out infinite reverse',
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        
        @keyframes gridPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        
        @keyframes dataFlow {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(79, 70, 229, 0.3); }
          50% { box-shadow: 0 0 40px rgba(79, 70, 229, 0.5); }
        }
        
        .stage-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .processor-badge:hover {
          transform: scale(1.1);
        }
        
        .data-pill:hover {
          transform: scale(1.05);
          filter: brightness(1.2);
        }
        
        .right-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.08);
        }
      `}</style>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
            padding: '12px 24px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '100px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <img 
              src="https://NeuroNotionPullZonw.b-cdn.net/Secondary%20logo.png" 
              alt="Neuro Notion Logo"
              style={{
                width: '48px',
                height: '48px',
                objectFit: 'contain',
              }}
            />
            <span style={{
              fontSize: '18px',
              fontWeight: '600',
              background: 'linear-gradient(90deg, #A5B4FC, #C4B5FD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Neuro Notion App Limited</span>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: '700',
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #A5B4FC 50%, #C4B5FD 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
          }}>
            Data Journey Map
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: '1.6',
          }}>
            How your personal data flows through our ADHD support platform—from collection to secure deletion
          </p>

          {/* User Type Toggle */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}>
            <div style={{
              display: 'inline-flex',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '4px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <button
                onClick={() => setUserType('direct')}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  background: userType === 'direct' ? 'linear-gradient(135deg, #4F46E5, #7C3AED)' : 'transparent',
                  color: userType === 'direct' ? '#fff' : '#94A3B8',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                }}
              >
                🧑 Direct User
              </button>
              <button
                onClick={() => setUserType('clinic')}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  background: userType === 'clinic' ? 'linear-gradient(135deg, #4F46E5, #7C3AED)' : 'transparent',
                  color: userType === 'clinic' ? '#fff' : '#94A3B8',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                }}
              >
                🏥 Clinic Patient
              </button>
            </div>

            {/* Controller/Processor Info */}
            <div style={{
              padding: '16px 24px',
              background: userType === 'direct' ? 'rgba(79, 70, 229, 0.1)' : 'rgba(220, 38, 38, 0.1)',
              borderRadius: '12px',
              border: `1px solid ${userType === 'direct' ? 'rgba(79, 70, 229, 0.3)' : 'rgba(220, 38, 38, 0.3)'}`,
            }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px' }}>
                {userType === 'direct' ? (
                  <>📋 Neuro Notion App Limited = <strong style={{ color: '#A5B4FC' }}>Data Controller</strong></>
                ) : (
                  <>📋 Healthcare Provider = <strong style={{ color: '#FCA5A5' }}>Data Controller</strong> | Neuro Notion App Limited = <strong style={{ color: '#A5B4FC' }}>Data Processor</strong></>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Data Flow Pipeline */}
        <div style={{
          display: 'flex',
          gap: '16px',
          overflowX: 'auto',
          padding: '20px 0',
          marginBottom: '60px',
        }}>
          {stages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <div
                className="stage-card"
                onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
                style={{
                  minWidth: '200px',
                  background: activeStage === stage.id 
                    ? `linear-gradient(135deg, ${stage.color}20, ${stage.color}10)`
                    : 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '20px',
                  padding: '24px',
                  border: `2px solid ${activeStage === stage.id ? stage.color : 'rgba(255, 255, 255, 0.08)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Stage number indicator */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: stage.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '700',
                }}>{index + 1}</div>

                <div style={{
                  fontSize: '40px',
                  marginBottom: '16px',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                }}>{stage.icon}</div>
                
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  marginBottom: '8px',
                  color: stage.color,
                }}>{stage.title}</h3>
                
                <p style={{
                  fontSize: '13px',
                  color: '#94A3B8',
                  marginBottom: '16px',
                }}>{stage.description}</p>

                {/* Legal basis pills */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{
                    fontSize: '10px',
                    padding: '4px 8px',
                    background: 'rgba(79, 70, 229, 0.2)',
                    borderRadius: '4px',
                    color: '#A5B4FC',
                    fontFamily: "'Space Mono', monospace",
                  }}>{stage.legalBasis}</span>
                  <span style={{
                    fontSize: '10px',
                    padding: '4px 8px',
                    background: 'rgba(220, 38, 38, 0.2)',
                    borderRadius: '4px',
                    color: '#FCA5A5',
                    fontFamily: "'Space Mono', monospace",
                  }}>{stage.healthBasis}</span>
                </div>
              </div>
              
              {/* Flow arrow */}
              {index < stages.length - 1 && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: '40px',
                }}>
                  <svg width="40" height="20" viewBox="0 0 40 20">
                    <defs>
                      <linearGradient id={`arrow-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={stages[index].color} />
                        <stop offset="100%" stopColor={stages[index + 1].color} />
                      </linearGradient>
                    </defs>
                    <line
                      x1="0" y1="10" x2="30" y2="10"
                      stroke={`url(#arrow-${index})`}
                      strokeWidth="2"
                      strokeDasharray="5,3"
                      style={{ animation: 'dataFlow 1s linear infinite' }}
                    />
                    <polygon
                      points="30,5 40,10 30,15"
                      fill={stages[index + 1].color}
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Expanded Stage Detail */}
        {activeStage && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '24px',
            padding: '32px',
            marginBottom: '60px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            animation: 'slideIn 0.4s ease-out',
          }}>
            {(() => {
              const stage = stages.find(s => s.id === activeStage);
              return (
                <>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '24px',
                  }}>
                    <span style={{ fontSize: '48px' }}>{stage.icon}</span>
                    <div>
                      <h2 style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: stage.color,
                      }}>{stage.title} Stage</h2>
                      <p style={{ color: '#94A3B8' }}>{stage.description}</p>
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px',
                  }}>
                    {/* Data Types */}
                    <div>
                      <h4 style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#94A3B8',
                        marginBottom: '16px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}>Data Elements</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {stage.dataTypes
                          .filter(dt => userType === 'clinic' || !dt.clinicOnly)
                          .map((dataType, idx) => (
                            <div
                              key={idx}
                              className="data-pill"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '12px 16px',
                                background: `${getCategoryColor(dataType.category)}15`,
                                borderRadius: '12px',
                                border: `1px solid ${getCategoryColor(dataType.category)}30`,
                                transition: 'all 0.2s ease',
                                cursor: 'default',
                              }}
                            >
                              <span style={{ fontWeight: '500' }}>{dataType.name}</span>
                              <span style={{
                                fontSize: '11px',
                                padding: '4px 8px',
                                background: getCategoryColor(dataType.category),
                                borderRadius: '4px',
                                color: '#fff',
                                fontFamily: "'Space Mono', monospace",
                              }}>
                                {dataType.retention || dataType.period || dataType.location || dataType.processor || dataType.method}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Safeguards */}
                    <div>
                      <h4 style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#94A3B8',
                        marginBottom: '16px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}>🛡️ Security Safeguards</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {stage.safeguards.map((safeguard, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              padding: '12px 16px',
                              background: 'rgba(5, 150, 105, 0.1)',
                              borderRadius: '12px',
                              border: '1px solid rgba(5, 150, 105, 0.2)',
                            }}
                          >
                            <span style={{ color: '#10B981' }}>✓</span>
                            <span style={{ fontSize: '14px' }}>{safeguard}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {/* Third-Party Processors */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '24px',
            textAlign: 'center',
          }}>
            <span style={{
              background: 'linear-gradient(90deg, #A5B4FC, #C4B5FD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Third-Party Processors</span>
          </h2>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
          }}>
            {processors.map((processor) => (
              <div
                key={processor.name}
                className="processor-badge"
                onMouseEnter={() => setHoveredProcessor(processor.name)}
                onMouseLeave={() => setHoveredProcessor(null)}
                style={{
                  position: 'relative',
                  padding: '16px 24px',
                  background: hoveredProcessor === processor.name 
                    ? `linear-gradient(135deg, ${processor.color}30, ${processor.color}15)`
                    : 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '16px',
                  border: `2px solid ${hoveredProcessor === processor.name ? processor.color : 'rgba(255, 255, 255, 0.08)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: processor.color,
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  boxShadow: `0 0 10px ${processor.color}`,
                }} />
                <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '4px',
                }}>{processor.name}</div>
                <div style={{
                  fontSize: '12px',
                  color: '#94A3B8',
                }}>{processor.role}</div>
                
                {hoveredProcessor === processor.name && (
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#1E293B',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                    zIndex: 10,
                    minWidth: '180px',
                    animation: 'slideIn 0.2s ease',
                  }}>
                    <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '4px' }}>Compliance</div>
                    <div style={{ fontSize: '13px', fontWeight: '500', marginBottom: '8px' }}>{processor.compliance}</div>
                    <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '4px' }}>Location</div>
                    <div style={{ fontSize: '13px', fontWeight: '500' }}>{processor.location}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div style={{
            marginTop: '24px',
            textAlign: 'center',
            padding: '16px',
            background: 'rgba(5, 150, 105, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(5, 150, 105, 0.2)',
          }}>
            <span style={{ color: '#10B981', fontWeight: '600' }}>🚫 We never sell, rent, or trade your personal data</span>
          </div>
        </div>

        {/* User Rights */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '24px',
            textAlign: 'center',
          }}>
            <span style={{
              background: 'linear-gradient(90deg, #A5B4FC, #C4B5FD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Your Data Rights (GDPR)</span>
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px',
          }}>
            {userRights.map((right) => (
              <div
                key={right.right}
                className="right-card"
                style={{
                  padding: '20px 16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{right.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{right.right}</div>
                <div style={{
                  fontSize: '11px',
                  color: '#A5B4FC',
                  fontFamily: "'Space Mono', monospace",
                }}>{right.article}</div>
              </div>
            ))}
          </div>
          
          {userType === 'clinic' && (
            <div style={{
              marginTop: '16px',
              padding: '16px',
              background: 'rgba(220, 38, 38, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(220, 38, 38, 0.2)',
              textAlign: 'center',
              fontSize: '13px',
              color: '#FCA5A5',
            }}>
              ⚠️ As a clinic patient, some rights requests may need authorization from your Healthcare Provider
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          padding: '32px',
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        }}>
          <div style={{
            fontSize: '14px',
            color: '#64748B',
            marginBottom: '16px',
          }}>
            <strong style={{ color: '#94A3B8' }}>Data Protection Officer:</strong> vlad@neuro-notion.com
          </div>
          <div style={{
            fontSize: '12px',
            color: '#475569',
          }}>
            Neuro Notion App Limited | Company No. 15345630 | Loughborough, UK<br />
            Privacy Policy v3.0 | Last Updated: December 2025
          </div>
          <div style={{
            marginTop: '16px',
            padding: '12px 20px',
            background: 'rgba(79, 70, 229, 0.1)',
            borderRadius: '8px',
            display: 'inline-block',
            fontSize: '12px',
          }}>
            🇬🇧 UK GDPR Compliant | 🇪🇺 EU GDPR Compliant | 🔒 ICO Supervisory Authority
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataJourneyMap;