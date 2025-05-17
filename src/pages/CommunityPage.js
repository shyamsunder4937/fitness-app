import React from 'react';
import './CommunityPage.css';

const CommunityPage = () => {
  // Community data
  const communityPosts = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        level: "Advanced"
      },
      date: "2 days ago",
      content: "Just completed my 30-day meal prep challenge! Lost 8 pounds and feel more energetic than ever. The high-protein breakfast option in the Weight Loss Plan was a game-changer for me.",
      likes: 48,
      comments: 12,
    },
    {
      id: 2,
      user: {
        name: "Michael Chen",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        level: "Intermediate"
      },
      date: "1 week ago",
      content: "Question for the community: I'm struggling to hit my protein goals while maintaining a plant-based diet. Any suggestions for high-protein vegan foods that don't involve protein powder?",
      likes: 23,
      comments: 31,
      image: null
    },
    {
      id: 3,
      user: {
        name: "Emma Rodriguez",
        avatar: "https://randomuser.me/api/portraits/women/29.jpg",
        level: "Beginner"
      },
      date: "2 weeks ago",
      content: "Starting my fitness journey today! Just calculated my daily calorie needs using the calculator here. Excited to follow the meal plans and see results!",
      likes: 76,
      comments: 19,
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const challenges = [
    {
      id: 1,
      title: "7-Day Sugar Detox",
      participants: 1284,
      progress: 65,
      daysLeft: 3,
      image: "https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "30-Day Meal Prep",
      participants: 843,
      progress: 20,
      daysLeft: 24,
      image: "https://images.unsplash.com/photo-1532465614-6cc8d45f647f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 3,
      title: "Hydration Challenge",
      participants: 2156,
      progress: 85,
      daysLeft: 1,
      image: "https://images.unsplash.com/photo-1550505095-81378a674c71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div className="page-container">
      <div className="page-bg-image"></div>
      <div className="community-container">
        <div className="community-hero">
          <h1>Community</h1>
          <p>Connect with like-minded fitness enthusiasts</p>
        </div>

        <div className="community-section">
          <div className="community-header">
            <div className="community-actions">
              <button className="post-button">Share Your Story</button>
              <div className="community-filter">
                <select>
                  <option>Recent Activity</option>
                  <option>Most Popular</option>
                  <option>Trending</option>
                  <option>Success Stories</option>
                  <option>Questions</option>
                </select>
              </div>
            </div>
          </div>

          <div className="community-layout">
            <div className="community-main">
              {/* Community Posts */}
              <div className="community-posts">
                {communityPosts.map(post => (
                  <div key={post.id} className="community-post">
                    <div className="post-header">
                      <div className="post-user">
                        <img src={post.user.avatar} alt={post.user.name} className="user-avatar" />
                        <div className="user-info">
                          <h4>{post.user.name}</h4>
                          <div className="user-meta">
                            <span className="user-level">{post.user.level}</span>
                            <span className="post-date">{post.date}</span>
                          </div>
                        </div>
                      </div>
                      <button className="post-options">•••</button>
                    </div>
                    
                    <div className="post-content">
                      <p>{post.content}</p>
                      {post.image && (
                        <div className="post-image-container">
                          <img src={post.image} alt="Post" className="post-image" />
                        </div>
                      )}
                    </div>
                    
                    <div className="post-actions">
                      <button className="post-action">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"></path>
                          <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <span>{post.likes}</span>
                      </button>
                      <button className="post-action">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span>{post.comments}</span>
                      </button>
                      <button className="post-action">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                          <polyline points="16 6 12 2 8 6"></polyline>
                          <line x1="12" y1="2" x2="12" y2="15"></line>
                        </svg>
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="community-sidebar">
              {/* Challenges Section */}
              <div className="challenges-section">
                <h3>Active Challenges</h3>
                <div className="challenges-list">
                  {challenges.map(challenge => (
                    <div key={challenge.id} className="challenge-card">
                      <div className="challenge-image-container">
                        <img src={challenge.image} alt={challenge.title} className="challenge-image" />
                        <div className="challenge-overlay">
                          <span className="days-left">{challenge.daysLeft} days left</span>
                        </div>
                      </div>
                      <div className="challenge-content">
                        <h4>{challenge.title}</h4>
                        <div className="challenge-meta">
                          <span>{challenge.participants} participants</span>
                        </div>
                        <div className="challenge-progress">
                          <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${challenge.progress}%` }}></div>
                          </div>
                          <span className="progress-text">{challenge.progress}% complete</span>
                        </div>
                        <button className="join-challenge-btn">Join Challenge</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="view-all-challenges">View All Challenges</button>
              </div>
              
              {/* Top Contributors */}
              <div className="top-contributors">
                <h3>Top Contributors</h3>
                <div className="contributors-list">
                  <div className="contributor">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Contributor" className="contributor-avatar" />
                    <div className="contributor-details">
                      <h4>Sarah Johnson</h4>
                      <span className="contribution-points">1,245 points</span>
                    </div>
                    <div className="contributor-rank">#1</div>
                  </div>
                  <div className="contributor">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Contributor" className="contributor-avatar" />
                    <div className="contributor-details">
                      <h4>Michael Chen</h4>
                      <span className="contribution-points">1,087 points</span>
                    </div>
                    <div className="contributor-rank">#2</div>
                  </div>
                  <div className="contributor">
                    <img src="https://randomuser.me/api/portraits/women/29.jpg" alt="Contributor" className="contributor-avatar" />
                    <div className="contributor-details">
                      <h4>Emma Rodriguez</h4>
                      <span className="contribution-points">964 points</span>
                    </div>
                    <div className="contributor-rank">#3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 