import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import logoSvg from '../assets/glencairn.webp';

export function LandingPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <div className="position-relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #5B9BD5 0%, #83B4E0 100%)'
      }}>
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container py-3">
            <div className="navbar-brand d-flex align-items-center gap-3">
              <img src={logoSvg} alt="Whiskey Canon" height="50" />
              <div className="d-flex flex-column">
                <span className="h3 mb-0 text-white">WHISKEY</span>
                <span className="text-white-50" style={{ fontSize: '0.9rem', letterSpacing: '0.15em' }}>CANON</span>
              </div>
            </div>
            <div className="d-flex gap-2">
              <button onClick={() => navigate('/login')} className="btn btn-outline-light">
                Login
              </button>
              <button onClick={() => navigate('/register')} className="btn btn-light" style={{ color: '#5B9BD5' }}>
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-6 text-white py-5">
              <h1 className="display-3 fw-bold mb-4">
                Your Personal Whiskey Collection Manager
              </h1>
              <p className="lead mb-4">
                Organize, track, and celebrate your whiskey collection with ease.
                From tasting notes to investment tracking, manage everything in one place.
              </p>
              <div className="d-flex gap-3">
                <button
                  onClick={() => navigate('/register')}
                  className="btn btn-light btn-lg px-4"
                  style={{ color: '#5B9BD5' }}
                >
                  Start Free
                </button>
                <button
                  onClick={() => navigate('/login')}
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Sign In
                </button>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block text-center">
              <img
                src={logoSvg}
                alt="Whiskey Glass"
                style={{
                  width: '80%',
                  maxWidth: '400px',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#5B9BD5' }}>
              Everything You Need to Manage Your Collection
            </h2>
            <p className="lead text-muted">
              Powerful features designed for whiskey enthusiasts
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>📚</div>
                  <h3 className="h5 mb-3" style={{ color: '#5B9BD5' }}>Collection Management</h3>
                  <p className="text-muted">
                    Keep detailed records of every bottle in your collection, including purchase details,
                    tasting notes, and ratings.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>📊</div>
                  <h3 className="h5 mb-3" style={{ color: '#5B9BD5' }}>Analytics & Insights</h3>
                  <p className="text-muted">
                    Visualize your collection with beautiful charts and statistics. Track spending,
                    favorite types, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>💰</div>
                  <h3 className="h5 mb-3" style={{ color: '#5B9BD5' }}>Investment Tracking</h3>
                  <p className="text-muted">
                    Monitor the value of your collection over time with market price tracking
                    and investment analytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>📝</div>
                  <h3 className="h5 mb-3" style={{ color: '#5B9BD5' }}>Detailed Notes</h3>
                  <p className="text-muted">
                    Record comprehensive tasting notes including nose, palate, finish,
                    and food pairings for each whiskey.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>📤</div>
                  <h3 className="h5 mb-3" style={{ color: '#5B9BD5' }}>Import & Export</h3>
                  <p className="text-muted">
                    Easily import your existing collection via CSV and export your data
                    whenever you need it.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>🔒</div>
                  <h3 className="h5 mb-3" style={{ color: '#5B9BD5' }}>Secure & Private</h3>
                  <p className="text-muted">
                    Your collection data is encrypted and secure. Role-based access control
                    for team management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#5B9BD5' }}>
              How It Works
            </h2>
            <p className="lead text-muted">
              Get started in just three simple steps
            </p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="mb-4 d-flex align-items-center justify-content-center" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#5B9BD5',
                  fontSize: '2rem',
                  color: 'white',
                  margin: '0 auto'
                }}>
                  1
                </div>
                <h3 className="h5 mb-3" style={{ color: '#5B9BD5' }}>Create Your Account</h3>
                <p className="text-muted">
                  Sign up for free in seconds. No credit card required. Choose your role based on your needs.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="mb-4 d-flex align-items-center justify-content-center" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#5B9BD5',
                  fontSize: '2rem',
                  color: 'white',
                  margin: '0 auto'
                }}>
                  2
                </div>
                <h3 className="h5 mb-3" style={{ color: '#5B9BD5' }}>Add Your Whiskeys</h3>
                <p className="text-muted">
                  Input your collection manually or import from a CSV file. Add as much or as little detail as you want.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="mb-4 d-flex align-items-center justify-content-center" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#5B9BD5',
                  fontSize: '2rem',
                  color: 'white',
                  margin: '0 auto'
                }}>
                  3
                </div>
                <h3 className="h5 mb-3" style={{ color: '#5B9BD5' }}>Track & Enjoy</h3>
                <p className="text-muted">
                  View beautiful analytics, track your spending, record tasting notes, and watch your collection grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-5 bg-white">
        <div className="container py-5">
          <div className="row text-center g-4">
            <div className="col-md-3">
              <div className="mb-2" style={{ fontSize: '3rem', color: '#5B9BD5' }}>🥃</div>
              <h3 className="h2 fw-bold mb-2" style={{ color: '#5B9BD5' }}>Unlimited</h3>
              <p className="text-muted">Bottles in Your Collection</p>
            </div>
            <div className="col-md-3">
              <div className="mb-2" style={{ fontSize: '3rem', color: '#5B9BD5' }}>🔐</div>
              <h3 className="h2 fw-bold mb-2" style={{ color: '#5B9BD5' }}>100%</h3>
              <p className="text-muted">Secure & Private</p>
            </div>
            <div className="col-md-3">
              <div className="mb-2" style={{ fontSize: '3rem', color: '#5B9BD5' }}>📱</div>
              <h3 className="h2 fw-bold mb-2" style={{ color: '#5B9BD5' }}>Any Device</h3>
              <p className="text-muted">Access Anywhere</p>
            </div>
            <div className="col-md-3">
              <div className="mb-2" style={{ fontSize: '3rem', color: '#5B9BD5' }}>⚡</div>
              <h3 className="h2 fw-bold mb-2" style={{ color: '#5B9BD5' }}>Free</h3>
              <p className="text-muted">No Credit Card Needed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#5B9BD5' }}>
              Perfect For Every Whiskey Lover
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3" style={{ color: '#5B9BD5' }}>📖 Collectors</h3>
                  <p className="text-muted mb-3">
                    Keep track of every bottle, from rare finds to everyday favorites. Know exactly what's in your collection and where it's stored.
                  </p>
                  <ul className="text-muted small">
                    <li>Catalog unlimited bottles</li>
                    <li>Track purchase dates and prices</li>
                    <li>Monitor bottle codes and locations</li>
                    <li>Track opened vs sealed bottles</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3" style={{ color: '#5B9BD5' }}>💎 Investors</h3>
                  <p className="text-muted mb-3">
                    Monitor your whiskey investment portfolio with detailed financial tracking and market value insights.
                  </p>
                  <ul className="text-muted small">
                    <li>Track purchase and market prices</li>
                    <li>Calculate ROI automatically</li>
                    <li>Monitor collection value over time</li>
                    <li>Identify appreciation trends</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3" style={{ color: '#5B9BD5' }}>👃 Enthusiasts</h3>
                  <p className="text-muted mb-3">
                    Record detailed tasting notes, ratings, and experiences. Build your whiskey knowledge base.
                  </p>
                  <ul className="text-muted small">
                    <li>Comprehensive tasting notes</li>
                    <li>Rate and review each bottle</li>
                    <li>Track food pairings</li>
                    <li>Discover your preferences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#5B9BD5' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      Is Whiskey Canon really free?
                    </button>
                  </h3>
                  <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      Yes! Whiskey Canon is completely free to use. There are no hidden fees, premium tiers, or credit card requirements. We believe every whiskey enthusiast should have access to great collection management tools.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      How many bottles can I add to my collection?
                    </button>
                  </h3>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      There's no limit! Add as many bottles as you have in your collection, whether it's 10 or 10,000. Our system is designed to handle collections of any size.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Can I import my existing collection?
                    </button>
                  </h3>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      Absolutely! If you have your collection in a spreadsheet, you can easily import it using our CSV import feature. We'll guide you through the process to make it as smooth as possible.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      Is my data secure?
                    </button>
                  </h3>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      Security is our top priority. All passwords are encrypted using industry-standard bcrypt hashing, and your data is stored securely with proper access controls. Your collection information is private and never shared with third parties.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                      Can I export my collection data?
                    </button>
                  </h3>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      Yes! You can export your entire collection to CSV format at any time. Your data is yours, and we make it easy to download and use however you like.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                      What types of whiskey can I track?
                    </button>
                  </h3>
                  <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      All of them! Whether you collect bourbon, scotch, Irish whiskey, Japanese whisky, rye, Tennessee whiskey, Canadian whisky, or any other type, Whiskey Canon supports it all.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-5" style={{ background: 'linear-gradient(135deg, #5B9BD5 0%, #83B4E0 100%)' }}>
        <div className="container py-5 text-center text-white">
          <h2 className="display-5 fw-bold mb-4">
            Ready to Start Organizing?
          </h2>
          <p className="lead mb-4">
            Join whiskey enthusiasts who trust Whiskey Canon to manage their collections
          </p>
          <button
            onClick={() => navigate('/register')}
            className="btn btn-light btn-lg px-5"
            style={{ color: '#5B9BD5' }}
          >
            Create Your Free Account
          </button>
          <p className="mt-3 mb-0 small">
            No credit card required • Free forever • Start in seconds
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
