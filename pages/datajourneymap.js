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
      color: '#5D359B',
      description: 'Data enters the system',
      legalBasis: 'Art. 6(1)(b) Contractual Necessity',
      healthBasis: userType === 'direct' ? 'Art. 9(2)(a) Explicit Consent' : 'Art. 9(2)(h) Healthcare Provision',
      dataTypes: [
        { name: 'Email Address', category: 'identifier', retention: 'Account lifetime' },
        { name: 'Display Name', category: 'identifier', retention: 'Account lifetime' },
        { name: 'Clinic Reference Number', category: 'identifier', retention: 'Account lifetime', clinicOnly: true },
        { name: 'Device Info', category: 'technical', retention: '24 months' },
        { name: 'IP Address', category: 'technical', retention: 'Anonymized' },
      ],
      safeguards: ['TLS 1.3 encryption', 'GDPR consent capture', 'Data minimization'],
    },
    {
      id: 'processing',
      title: 'Processing',
      icon: '⚙️',
      color: '#BF96FF',
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
      color: '#76BBFF',
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
      color: '#75E5D4',
      description: 'Controlled third-party access',
      legalBasis: 'Art. 28 Processor Agreements',
      healthBasis: userType === 'clinic' ? 'Healthcare provider access' : 'No health data shared',
      dataTypes: [
        { name: 'Payment Data', category: 'financial', processor: 'Stripe', shared: 'Transaction only' },
        { name: 'Push Tokens', category: 'technical', processor: 'Firebase', shared: 'Device tokens' },
        { name: 'Support Chats', category: 'communication', processor: 'Crisp', shared: 'Conversations' },
        { name: 'Transactional Email', category: 'communication', processor: 'Resend', shared: 'Account emails' },
        { name: 'Marketing Email', category: 'communication', processor: 'Moosend', shared: 'With consent only' },
        { name: 'Referral Tracking', category: 'technical', processor: 'Rewardful', shared: 'Cookie-based, no PII' },
        { name: 'Clinical Reports', category: 'health', processor: 'Healthcare Provider', shared: 'Progress data', clinicOnly: true },
      ],
      safeguards: ['Standard Contractual Clauses', 'DPAs in place', 'No data selling'],
    },
    {
      id: 'retention',
      title: 'Retention',
      icon: '⏱️',
      color: '#1E8E7E',
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
      color: '#FF7B7B',
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
    { name: 'Supabase', role: 'Database', color: '#75E5D4', compliance: 'SOC 2 Type II, GDPR', location: 'UK/EEA (AWS EU)' },
    { name: 'GCP', role: 'Cloud / Identity', color: '#76BBFF', compliance: 'ISO 27001, GDPR', location: 'EU/UK' },
    { name: 'Vercel', role: 'Web Hosting', color: '#FFFFFF', compliance: 'GDPR, TLS in transit', location: 'USA/EU' },
    { name: 'Cloudflare', role: 'CDN / Security', color: '#FFBC69', compliance: 'SOC 2 Type II, GDPR', location: 'USA/EU' },
    { name: 'Stripe', role: 'Payments', color: '#BF96FF', compliance: 'PCI DSS Level 1', location: 'USA (SCC)' , corporateHide: true },
    { name: 'Vapi AI', role: 'Voice', color: '#FF7B7B', compliance: 'Privacy-focused', location: 'Ephemeral' },
    { name: 'Deepgram', role: 'Speech-to-Text', color: '#75E5D4', compliance: 'SOC 2 Type II, GDPR', location: 'USA (SCC)' },
    { name: 'ElevenLabs', role: 'Voice Synthesis', color: '#BF96FF', compliance: 'GDPR', location: 'USA/EU' },
    { name: 'OpenAI', role: 'AI / LLM', color: '#1E8E7E', compliance: 'GDPR, SCC, no training on API data', location: 'USA (SCC)' },
    { name: 'Anthropic', role: 'AI / LLM', color: '#E59775', compliance: 'GDPR, SCC, no training on API data', location: 'USA (SCC)' },
    { name: 'Mem0', role: 'AI Memory', color: '#CDABFF', compliance: 'GDPR', location: 'USA' },
    { name: 'PostHog', role: 'Analytics', color: '#FFBC69', compliance: 'GDPR', location: 'USA/EU' },
    { name: 'Crisp', role: 'Support', color: '#87E3FF', compliance: 'GDPR, E2E encrypted', location: 'EU' },
    { name: 'Firebase', role: 'Push', color: '#FFBC69', compliance: 'Google DPA', location: 'USA/EU' },
    { name: 'Resend', role: 'Transactional Email', color: '#A8A7AB', compliance: 'GDPR, TLS', location: 'EU (Ireland)' },
    { name: 'Moosend', role: 'Marketing Email', color: '#FF9CC1', compliance: 'GDPR, consent-based', location: 'EU' , corporateHide: true },
    { name: 'Rewardful', role: 'Referrals', color: '#A1FF9C', compliance: 'GDPR, no PII shared', location: 'USA' , corporateHide: true },
  ];

  const userRights = [
    { right: 'Access', article: 'Art. 15', icon: '👁️' },
    { right: 'Rectification', article: 'Art. 16', icon: '✏️' },
    { right: 'Erasure', article: 'Art. 17', icon: '🗑️' },
    { right: 'Restriction', article: 'Art. 18', icon: '⏸️' },
    { right: 'Portability', article: 'Art. 20', icon: '📦' },
    { right: 'Object', article: 'Art. 21', icon: '✋' },
    { right: 'Withdraw Consent', article: 'Art. 7(3)', icon: '🔓' },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      identifier: '#5D359B',
      technical: '#6B6577',
      'user-content': '#BF96FF',
      health: '#FF7B7B',
      financial: '#1E8E7E',
      communication: '#75E5D4',
      primary: '#76BBFF',
      backup: '#6B6577',
      analytics: '#FFBC69',
      active: '#1E8E7E',
      logs: '#6B6577',
      deleted: '#FF7B7B',
      personal: '#5D359B',
    };
    return colors[category] || '#6B6577';
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #26232C 0%, #46247B 50%, #26232C 100%)',
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#FFF7EE',
      padding: '40px 20px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(93, 53, 155, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(93, 53, 155, 0.03) 1px, transparent 1px)
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
        background: 'radial-gradient(circle, rgba(93, 53, 155, 0.15) 0%, transparent 70%)',
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
        background: 'radial-gradient(circle, rgba(191, 150, 255, 0.12) 0%, transparent 70%)',
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
          0%, 100% { box-shadow: 0 0 20px rgba(93, 53, 155, 0.3); }
          50% { box-shadow: 0 0 40px rgba(93, 53, 155, 0.5); }
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
              src="/romi/romi-logo-linear.svg"
              alt="Romi"
              style={{
                width: '116px',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <span style={{
              fontSize: '18px',
              fontWeight: '600',
              background: 'linear-gradient(90deg, #BF96FF, #D9C0FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Neuro Notion App Limited</span>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: '700',
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #BF96FF 50%, #D9C0FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
          }}>
            Data Journey Map
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#A8A7AB',
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
                  background: userType === 'direct' ? 'linear-gradient(135deg, #5D359B, #BF96FF)' : 'transparent',
                  color: userType === 'direct' ? '#fff' : '#A8A7AB',
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
                  background: userType === 'clinic' ? 'linear-gradient(135deg, #5D359B, #BF96FF)' : 'transparent',
                  color: userType === 'clinic' ? '#fff' : '#A8A7AB',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                }}
              >
                🏥 Clinic Patient
              </button>
              <button
                onClick={() => setUserType('corporate')}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  background: userType === 'corporate' ? 'linear-gradient(135deg, #5D359B, #BF96FF)' : 'transparent',
                  color: userType === 'corporate' ? '#fff' : '#A8A7AB',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                }}
              >
                🏢 Employee
              </button>
            </div>

            {/* Controller/Processor Info */}
            <div style={{
              padding: '16px 24px',
              background: userType !== 'clinic' ? 'rgba(93, 53, 155, 0.1)' : 'rgba(255, 123, 123, 0.1)',
              borderRadius: '12px',
              border: `1px solid ${userType !== 'clinic' ? 'rgba(93, 53, 155, 0.3)' : 'rgba(255, 123, 123, 0.3)'}`,
            }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px' }}>
                {userType === 'clinic' ? (
                  <>📋 Healthcare Provider = <strong style={{ color: '#FF9CC1' }}>Data Controller</strong> | Neuro Notion App Limited = <strong style={{ color: '#BF96FF' }}>Data Processor</strong></>
                ) : userType === 'corporate' ? (
                  <>📋 Neuro Notion App Limited = <strong style={{ color: '#BF96FF' }}>Data Controller</strong> | Your employer sees <strong style={{ color: '#75E5D4' }}>aggregate data only</strong></>
                ) : (
                  <>📋 Neuro Notion App Limited = <strong style={{ color: '#BF96FF' }}>Data Controller</strong></>
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
                  color: '#A8A7AB',
                  marginBottom: '16px',
                }}>{stage.description}</p>

                {/* Legal basis pills */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{
                    fontSize: '10px',
                    padding: '4px 8px',
                    background: 'rgba(93, 53, 155, 0.2)',
                    borderRadius: '4px',
                    color: '#BF96FF',
                    fontFamily: "'Space Mono', monospace",
                  }}>{stage.legalBasis}</span>
                  <span style={{
                    fontSize: '10px',
                    padding: '4px 8px',
                    background: 'rgba(255, 123, 123, 0.2)',
                    borderRadius: '4px',
                    color: '#FF9CC1',
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
                      <p style={{ color: '#A8A7AB' }}>{stage.description}</p>
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
                        color: '#A8A7AB',
                        marginBottom: '16px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}>Data Elements</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {stage.dataTypes
                          .filter(dt => userType === 'clinic' || !dt.clinicOnly)
                          .filter(dt => userType !== 'corporate' || !['Stripe', 'Moosend', 'Rewardful'].includes(dt.processor))
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
                        color: '#A8A7AB',
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
                              background: 'rgba(30, 142, 126, 0.1)',
                              borderRadius: '12px',
                              border: '1px solid rgba(30, 142, 126, 0.2)',
                            }}
                          >
                            <span style={{ color: '#75E5D4' }}>✓</span>
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

        {/* Visual Data Flow Web Diagram */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '12px',
            textAlign: 'center',
          }}>
            <span style={{
              background: 'linear-gradient(90deg, #BF96FF, #D9C0FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>System Data Flow Map</span>
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#A8A7AB',
            marginBottom: '32px',
            fontSize: '14px',
          }}>Interactive view of how data moves between all system components</p>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '24px',
            padding: '20px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Background grid pattern */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)
              `,
              backgroundSize: '24px 24px',
            }} />

            <svg 
              viewBox="0 0 1000 750" 
              style={{ 
                width: '100%', 
                height: 'auto',
                minHeight: '550px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <defs>
                {/* Arrow markers */}
                <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#5D359B" />
                </marker>
                <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#75E5D4" />
                </marker>
                <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#FF7B7B" />
                </marker>
                <marker id="arrowhead-yellow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#FFBC69" />
                </marker>
                <marker id="arrowhead-purple" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#BF96FF" />
                </marker>
                <marker id="arrowhead-cyan" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#87E3FF" />
                </marker>
                <marker id="arrowhead-pink" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#FF9CC1" />
                </marker>
                <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#FFBC69" />
                </marker>

                {/* Glows */}
                <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood floodColor="#5D359B" floodOpacity="0.5" />
                  <feComposite in2="blur" operator="in" />
                  <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="glow-green" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feFlood floodColor="#75E5D4" floodOpacity="0.6" />
                  <feComposite in2="blur" operator="in" />
                  <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>

                {/* Label background filter */}
                <filter id="label-bg" x="-0.1" y="-0.1" width="1.2" height="1.3">
                  <feFlood floodColor="#26232C" floodOpacity="0.85" result="bg" />
                  <feMerge>
                    <feMergeNode in="bg" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* === LAYER 1: CONNECTION LINES (bottom layer) === */}
              <g id="connections">
                {/* User to App */}
                <path d="M 150 350 L 270 350" stroke="#5D359B" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead-blue)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1s" repeatCount="indefinite" />
                </path>

                {/* App to Supabase (main data store) */}
                <path d="M 450 340 L 570 340" stroke="#75E5D4" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead-green)">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1s" repeatCount="indefinite" />
                </path>

                {/* Supabase back to App (read) */}
                <path d="M 570 365 L 450 365" stroke="#75E5D4" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-green)" opacity="0.6" strokeDasharray="4,2">
                  <animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" />
                </path>

                {/* App to Vapi (voice) */}
                <path d="M 380 290 Q 400 180, 490 130" stroke="#FF7B7B" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-red)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="0.8s" repeatCount="indefinite" />
                </path>

                {/* Vapi to LLM */}
                <path d="M 620 110 Q 720 100, 820 180" stroke="#FF7B7B" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-purple)">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="0.8s" repeatCount="indefinite" />
                </path>

                {/* App to LLM (direct chat) */}
                <path d="M 450 310 Q 600 220, 780 220" stroke="#BF96FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-purple)" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.9s" repeatCount="indefinite" />
                </path>

                {/* LLM to Supabase (function execution results) */}
                <path d="M 820 300 Q 750 360, 680 350" stroke="#BF96FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-green)" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.9s" repeatCount="indefinite" />
                </path>

                {/* App to PostHog */}
                <path d="M 420 420 Q 500 520, 580 560" stroke="#FFBC69" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-yellow)" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.2s" repeatCount="indefinite" />
                </path>

                {/* App to Stripe */}
                <path d="M 320 420 Q 280 500, 220 540" stroke="#BF96FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-blue)" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.1s" repeatCount="indefinite" />
                </path>

                {/* App to Firebase */}
                <path d="M 300 400 Q 200 460, 120 520" stroke="#FFBC69" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-orange)" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1s" repeatCount="indefinite" />
                </path>

                {/* Firebase back to User */}
                <path d="M 80 540 Q 50 450, 80 390" stroke="#FFBC69" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-orange)">
                  <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1s" repeatCount="indefinite" />
                </path>

                {/* App to Crisp */}
                <path d="M 380 420 Q 360 500, 360 560" stroke="#FF9CC1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-pink)" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1s" repeatCount="indefinite" />
                </path>

                {/* Supabase to Healthcare Provider (clinic only) */}
                {userType === 'clinic' && (
                  <path d="M 680 380 Q 780 460, 870 500" stroke="#FF7B7B" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead-red)">
                    <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1s" repeatCount="indefinite" />
                  </path>
                )}
              </g>

              {/* === LAYER 2: NODES (middle layer) === */}
              <g id="nodes">
                {/* USER NODE */}
                <g transform="translate(100, 350)">
                  <circle cx="0" cy="0" r="50" fill="#46247B" stroke="#5D359B" strokeWidth="3" filter="url(#glow-blue)" />
                  <text x="0" y="-8" textAnchor="middle" fontSize="28">👤</text>
                  <text x="0" y="18" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">YOU</text>
                  <text x="0" y="70" textAnchor="middle" fill="#A8A7AB" fontSize="9">(User)</text>
                </g>

                {/* NEURO NOTION APP NODE */}
                <g transform="translate(360, 350)">
                  <rect x="-80" y="-55" width="160" height="110" rx="16" fill="#46247B" stroke="#5D359B" strokeWidth="3" filter="url(#glow-blue)" />
                  <text x="0" y="-25" textAnchor="middle" fontSize="26">🧠</text>
                  <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Neuro Notion</text>
                  <text x="0" y="22" textAnchor="middle" fill="#BF96FF" fontSize="10">App</text>
                  <text x="0" y="42" textAnchor="middle" fill="#6B6577" fontSize="8">Tasks, Routines, Moods</text>
                </g>

                {/* SUPABASE NODE */}
                <g transform="translate(630, 350)">
                  <rect x="-60" y="-45" width="120" height="90" rx="12" fill="#123830" stroke="#75E5D4" strokeWidth="3" filter="url(#glow-green)" />
                  <text x="0" y="-18" textAnchor="middle" fontSize="22">🗄️</text>
                  <text x="0" y="5" textAnchor="middle" fill="#75E5D4" fontSize="12" fontWeight="700">Supabase</text>
                  <text x="0" y="22" textAnchor="middle" fill="#75E5D4" fontSize="9">Database (UK/EEA)</text>
                  <text x="0" y="38" textAnchor="middle" fill="#1E8E7E" fontSize="7">SOC 2 Type II</text>
                </g>

                {/* VAPI NODE */}
                <g transform="translate(550, 100)">
                  <rect x="-60" y="-35" width="120" height="70" rx="12" fill="#3A2626" stroke="#FF7B7B" strokeWidth="2" />
                  <text x="0" y="-10" textAnchor="middle" fontSize="20">🎙️</text>
                  <text x="0" y="12" textAnchor="middle" fill="#FF7B7B" fontSize="11" fontWeight="600">Vapi AI</text>
                  <text x="0" y="28" textAnchor="middle" fill="#FF9CC1" fontSize="8">Voice Processing</text>
                  <text x="0" y="48" textAnchor="middle" fill="#A8A7AB" fontSize="7">Ephemeral • No Storage</text>
                </g>

                {/* LLM NODE */}
                <g transform="translate(850, 240)">
                  <rect x="-70" y="-50" width="140" height="100" rx="14" fill="#3A2263" stroke="#BF96FF" strokeWidth="2" />
                  <text x="0" y="-22" textAnchor="middle" fontSize="22">🤖</text>
                  <text x="0" y="2" textAnchor="middle" fill="#BF96FF" fontSize="12" fontWeight="700">LLM</text>
                  <text x="0" y="18" textAnchor="middle" fill="#D9C0FF" fontSize="9">OpenAI + Mem0</text>
                  <text x="0" y="35" textAnchor="middle" fill="#A8A7AB" fontSize="8">AI Processing</text>
                </g>

                {/* POSTHOG NODE */}
                <g transform="translate(650, 590)">
                  <rect x="-55" y="-30" width="110" height="65" rx="10" fill="#3A2F1A" stroke="#FFBC69" strokeWidth="2" />
                  <text x="0" y="-8" textAnchor="middle" fontSize="18">📊</text>
                  <text x="0" y="12" textAnchor="middle" fill="#FFBC69" fontSize="11" fontWeight="600">PostHog</text>
                  <text x="0" y="28" textAnchor="middle" fill="#FFBC69" fontSize="8">Analytics</text>
                  <text x="0" y="48" textAnchor="middle" fill="#A8A7AB" fontSize="7">Anonymized Events</text>
                </g>

                {/* STRIPE NODE */}
                <g transform="translate(180, 580)">
                  <rect x="-55" y="-30" width="110" height="65" rx="10" fill="#2E2A38" stroke="#BF96FF" strokeWidth="2" />
                  <text x="0" y="-8" textAnchor="middle" fontSize="18">💳</text>
                  <text x="0" y="12" textAnchor="middle" fill="#BF96FF" fontSize="11" fontWeight="600">Stripe</text>
                  <text x="0" y="28" textAnchor="middle" fill="#BF96FF" fontSize="8">Payments</text>
                  <text x="0" y="48" textAnchor="middle" fill="#A8A7AB" fontSize="7">PCI DSS Level 1</text>
                </g>

                {/* FIREBASE NODE */}
                <g transform="translate(80, 580)">
                  <rect x="-50" y="-30" width="100" height="65" rx="10" fill="#3A2A1A" stroke="#FFBC69" strokeWidth="2" />
                  <text x="0" y="-8" textAnchor="middle" fontSize="18">🔔</text>
                  <text x="0" y="12" textAnchor="middle" fill="#FFBC69" fontSize="11" fontWeight="600">Firebase</text>
                  <text x="0" y="28" textAnchor="middle" fill="#FFBC69" fontSize="8">Push Notifs</text>
                  <text x="0" y="48" textAnchor="middle" fill="#A8A7AB" fontSize="7">FCM</text>
                </g>

                {/* CRISP NODE */}
                <g transform="translate(360, 620)">
                  <rect x="-50" y="-30" width="100" height="65" rx="10" fill="#332F3B" stroke="#FF9CC1" strokeWidth="2" />
                  <text x="0" y="-8" textAnchor="middle" fontSize="18">💬</text>
                  <text x="0" y="12" textAnchor="middle" fill="#FF9CC1" fontSize="11" fontWeight="600">Crisp</text>
                  <text x="0" y="28" textAnchor="middle" fill="#FF9CC1" fontSize="8">Support Chat</text>
                  <text x="0" y="48" textAnchor="middle" fill="#A8A7AB" fontSize="7">GDPR Compliant</text>
                </g>

                {/* HEALTHCARE PROVIDER NODE (clinic only) */}
                {userType === 'clinic' && (
                  <g transform="translate(920, 540)">
                    <rect x="-60" y="-35" width="120" height="80" rx="12" fill="#3A2020" stroke="#FF7B7B" strokeWidth="3" />
                    <text x="0" y="-10" textAnchor="middle" fontSize="22">🏥</text>
                    <text x="0" y="12" textAnchor="middle" fill="#FF7B7B" fontSize="10" fontWeight="700">Healthcare</text>
                    <text x="0" y="26" textAnchor="middle" fill="#FF9CC1" fontSize="10" fontWeight="700">Provider</text>
                    <text x="0" y="45" textAnchor="middle" fill="#A8A7AB" fontSize="7">Data Controller</text>
                  </g>
                )}
              </g>

              {/* === LAYER 3: LABELS (top layer - always visible) === */}
              <g id="labels" style={{ pointerEvents: 'none' }}>
                {/* Label backgrounds for better readability */}
                
                {/* User to App label */}
                <rect x="175" y="325" width="70" height="16" rx="4" fill="#26232C" opacity="0.9" />
                <text x="210" y="337" fill="#BF96FF" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">interactions</text>

                {/* App to Supabase label */}
                <rect x="478" y="318" width="62" height="16" rx="4" fill="#26232C" opacity="0.9" />
                <text x="510" y="330" fill="#75E5D4" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">store data</text>

                {/* Supabase to App label */}
                <rect x="483" y="370" width="55" height="16" rx="4" fill="#26232C" opacity="0.9" />
                <text x="510" y="382" fill="#75E5D4" fontSize="9" textAnchor="middle" fontFamily="monospace">read data</text>

                {/* App to Vapi label */}
                <rect x="400" y="195" width="68" height="16" rx="4" fill="#26232C" opacity="0.9" />
                <text x="434" y="207" fill="#FF9CC1" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">voice audio</text>

                {/* Vapi to LLM label */}
                <rect x="680" y="118" width="90" height="16" rx="4" fill="#26232C" opacity="0.9" />
                <text x="725" y="130" fill="#FF9CC1" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">transcribed text</text>

                {/* App to LLM label */}
                <rect x="575" y="238" width="72" height="16" rx="4" fill="#26232C" opacity="0.9" />
                <text x="611" y="250" fill="#D9C0FF" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">chat context</text>

                {/* LLM to Supabase label */}
                <rect x="708" y="338" width="72" height="16" rx="4" fill="#26232C" opacity="0.9" />
                <text x="744" y="350" fill="#D9C0FF" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">function calls</text>

                {/* App to PostHog label */}
                <rect x="478" y="500" width="75" height="16" rx="4" fill="#26232C" opacity="0.9" />
                <text x="516" y="512" fill="#FFBC69" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">events (anon)</text>

                {/* App to Stripe label */}
                <rect x="238" y="468" width="55" height="16" rx="4" fill="#26232C" opacity="0.9" />
                <text x="266" y="480" fill="#BF96FF" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">payment</text>

                {/* App to Firebase label */}
                <rect x="168" y="448" width="70" height="16" rx="4" fill="#26232C" opacity="0.9" />
                <text x="203" y="460" fill="#FFBC69" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">push tokens</text>

                {/* Firebase to User label */}
                <rect x="28" y="448" width="72" height="16" rx="4" fill="#26232C" opacity="0.9" />
                <text x="64" y="460" fill="#FFBC69" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">notifications</text>

                {/* App to Crisp label */}
                <rect x="378" y="498" width="78" height="16" rx="4" fill="#26232C" opacity="0.9" />
                <text x="417" y="510" fill="#FF9CC1" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">support chat</text>

                {/* Healthcare Provider label (clinic only) */}
                {userType === 'clinic' && (
                  <>
                    <rect x="755" y="438" width="85" height="16" rx="4" fill="#26232C" opacity="0.9" />
                    <text x="798" y="450" fill="#FF9CC1" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">clinical reports</text>
                  </>
                )}
              </g>

              {/* LEGEND */}
              <g transform="translate(30, 700)">
                <text x="0" y="0" fill="#6B6577" fontSize="10" fontWeight="600">LEGEND:</text>
                <line x1="60" y1="-4" x2="95" y2="-4" stroke="#5D359B" strokeWidth="2.5" />
                <text x="100" y="0" fill="#A8A7AB" fontSize="9">User Data</text>
                <line x1="170" y1="-4" x2="205" y2="-4" stroke="#75E5D4" strokeWidth="2.5" />
                <text x="210" y="0" fill="#A8A7AB" fontSize="9">Storage</text>
                <line x1="265" y1="-4" x2="300" y2="-4" stroke="#BF96FF" strokeWidth="2.5" />
                <text x="305" y="0" fill="#A8A7AB" fontSize="9">AI Processing</text>
                <line x1="395" y1="-4" x2="430" y2="-4" stroke="#FF7B7B" strokeWidth="2.5" />
                <text x="435" y="0" fill="#A8A7AB" fontSize="9">Voice</text>
                <line x1="475" y1="-4" x2="510" y2="-4" stroke="#FFBC69" strokeWidth="2.5" strokeDasharray="4,2" />
                <text x="515" y="0" fill="#A8A7AB" fontSize="9">Analytics</text>
              </g>

            </svg>

            {/* Data flow key info */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              marginTop: '24px',
            }}>
              <div style={{
                padding: '12px 16px',
                background: 'rgba(255, 123, 123, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 123, 123, 0.2)',
              }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#FF7B7B', marginBottom: '4px' }}>🎙️ Voice Flow</div>
                <div style={{ fontSize: '11px', color: '#A8A7AB' }}>You → Vapi / Deepgram (transcribe, ephemeral) → LLM → ElevenLabs (reply) → Supabase</div>
              </div>
              <div style={{
                padding: '12px 16px',
                background: 'rgba(191, 150, 255, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(191, 150, 255, 0.2)',
              }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#BF96FF', marginBottom: '4px' }}>🤖 Chat Flow</div>
                <div style={{ fontSize: '11px', color: '#A8A7AB' }}>You → App → LLM (OpenAI, with Mem0 memory layer) → Function → Supabase</div>
              </div>
              <div style={{
                padding: '12px 16px',
                background: 'rgba(117, 229, 212, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(117, 229, 212, 0.2)',
              }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#75E5D4', marginBottom: '4px' }}>🗄️ Storage</div>
                <div style={{ fontSize: '11px', color: '#A8A7AB' }}>All user data encrypted in UK/EEA Supabase instance</div>
              </div>
              {userType === 'clinic' && (
                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(255, 123, 123, 0.1)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 123, 123, 0.2)',
                }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#FF7B7B', marginBottom: '4px' }}>🏥 Clinical Reports</div>
                  <div style={{ fontSize: '11px', color: '#A8A7AB' }}>Progress data shared with your Healthcare Provider</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Third-Party Processors */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '24px',
            textAlign: 'center',
          }}>
            <span style={{
              background: 'linear-gradient(90deg, #BF96FF, #D9C0FF)',
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
            {processors.filter(pr => userType !== 'corporate' || !pr.corporateHide).map((processor) => (
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
                  color: '#A8A7AB',
                }}>{processor.role}</div>
                
                {hoveredProcessor === processor.name && (
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#332F3B',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                    zIndex: 10,
                    minWidth: '180px',
                    animation: 'slideIn 0.2s ease',
                  }}>
                    <div style={{ fontSize: '11px', color: '#A8A7AB', marginBottom: '4px' }}>Compliance</div>
                    <div style={{ fontSize: '13px', fontWeight: '500', marginBottom: '8px' }}>{processor.compliance}</div>
                    <div style={{ fontSize: '11px', color: '#A8A7AB', marginBottom: '4px' }}>Location</div>
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
            background: 'rgba(30, 142, 126, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(30, 142, 126, 0.2)',
          }}>
            <span style={{ color: '#75E5D4', fontWeight: '600' }}>🚫 We never sell, rent, or trade your personal data</span>
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
              background: 'linear-gradient(90deg, #BF96FF, #D9C0FF)',
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
                  color: '#BF96FF',
                  fontFamily: "'Space Mono', monospace",
                }}>{right.article}</div>
              </div>
            ))}
          </div>
          
          {userType === 'clinic' && (
            <div style={{
              marginTop: '16px',
              padding: '16px',
              background: 'rgba(255, 123, 123, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 123, 123, 0.2)',
              textAlign: 'center',
              fontSize: '13px',
              color: '#FF9CC1',
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
            color: '#6B6577',
            marginBottom: '16px',
          }}>
            <strong style={{ color: '#A8A7AB' }}>Data Protection Officer:</strong> vlad@romiadhd.com
          </div>
          <div style={{
            fontSize: '12px',
            color: '#514F56',
          }}>
            Neuro Notion App Limited | Company No. 15345630 | 124 City Road, London, England, EC1V 2NX<br />
            Privacy Notice | Last Updated: 22 April 2026
          </div>
          <div style={{
            marginTop: '16px',
            padding: '12px 20px',
            background: 'rgba(93, 53, 155, 0.1)',
            borderRadius: '8px',
            display: 'inline-block',
            fontSize: '12px',
          }}>
            🇬🇧 UK GDPR Compliant | 🇪🇺 EU GDPR Compliant | 🔒 ICO Supervisory Authority | 🛡️ Cyber Essentials Plus
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataJourneyMap;