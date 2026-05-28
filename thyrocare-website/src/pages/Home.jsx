import {
  Phone,
  MessageCircle,
  Menu,
  Search,
  Download,
  MessageSquare,
  ChevronRight,
} from "lucide-react"

import "./Home.css"

const tests = [
  {
    name: "Aarogyam B Pro",
    desc: "Comprehensive wellness blood test for whole family.",
    file: "aarogyam-b-pro.pdf",
    image: "/images/b-pro.jpg",
    color: "#8b5cf6",
  },
  {
    name: "Aarogyam C Pro",
    desc: "Advanced cardiac risk assessment profile.",
    file: "aarogyam-c-pro.pdf",
    image: "/images/c-pro.jpg",
    color: "#22c55e",
  },
  {
    name: "Aarogyam D Plus",
    desc: "Diabetes & heart risk comprehensive profile.",
    file: "aarogyam-d-plus.pdf",
    image: "/images/d-plus.jpg",
    color: "#f97316",
  },
  {
    name: "Aarogyam D Pro",
    desc: "Complete diabetes screening profile.",
    file: "aarogyam-d-pro.pdf",
    image: "/images/d-pro.jpg",
    color: "#3b82f6",
  },
  {
    name: "HBA1C",
    desc: "Blood sugar monitoring test.",
    file: "hbalc.pdf",
    image: "/images/hbalc.jpg",
    color: "#ef4444",
  },
  {
    name: "Lipid Profile",
    desc: "Complete cholesterol analysis profile.",
    file: "lipid-profile.pdf",
    image: "/images/lipid.jpg",
    color: "#06b6d4",
  },
  {
    name: "Aarogyam Purush Profile",
    desc: "Complete health check for men.",
    file: "aarogyam-purush-profile.pdf",
    image: "/images/purush.jpg",
    color: "#7c3aed",
  },
  {
    name: "Aarogyam Stree Profile",
    desc: "Essential health check for women.",
    file: "aarogyam-stree-profile.pdf",
    image: "/images/stree.jpg",
    color: "#ec4899",
  },
  {
    name: "Thyroid Basic Profile",
    desc: "Basic thyroid hormone testing.",
    file: "thyroid-basic-profile.pdf",
    image: "/images/thyroid.jpg",
    color: "#6366f1",
  },
  {
    name: "Vitamin B12 Profile",
    desc: "Vitamin B12 deficiency screening.",
    file: "vitamin-b12-profile.pdf",
    image: "/images/vitamin-b12.jpg",
    color: "#14b8a6",
  },
  {
    name: "Vitamin D Profile",
    desc: "Vitamin D level testing profile.",
    file: "vitamin-d-profile.pdf",
    image: "/images/vitamin-d.jpg",
    color: "#f59e0b",
  },
]

const Home = () => {
  return (
    <div className="mobile">

      {/* HEADER */}
      <header className="header">

        <div className="logo">
          <h1>
            <span className="blue">Thyro</span>
            <span className="red">care</span>
          </h1>

          <p>Tests you can trust</p>
        </div>

        <div className="top-icons">

          <a href="tel:+919999999999" className="circle">
            <Phone size={20} />
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="circle green"
          >
            <MessageCircle size={20} />
          </a>

          <div className="circle dark">
            <Menu size={20} />
          </div>

        </div>

      </header>

      {/* HERO */}
      <section className="hero">

        <div className="badge">
          Trusted by Millions
        </div>

        <h2>
          Trusted Tests.
          <br />
          Better <span>Health.</span>
        </h2>

        <p>
          Accurate Reports • Home Collection • Fast Results
        </p>

        <div className="hero-buttons">

          <a href="tel:+919999999999" className="hero-btn white">
            <Phone size={16} />
            Call Now
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="hero-btn green-btn"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="hero-btn pink"
          >
            <MessageSquare size={16} />
            Enquiry
          </a>

        </div>

      </section>

      {/* SEARCH */}
      <div className="search-box">

        <Search size={20} className="search-icon" />

        <input
          type="text"
          placeholder="Search tests (Thyroid, Vitamin, Lipid...)"
        />

      </div>

      {/* CARDS */}
      <section className="tests">

        {tests.map((item, index) => (
          <div className="card" key={index}>

            <img
              src={item.image}
              alt={item.name}
              className="preview-image"
            />

            <div className="card-content">

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

            </div>

            <div className="actions">

              <a
                href={`/brochures/${item.file}`}
                download
                className="download-btn"
                style={{
                  borderColor: item.color,
                  color: item.color,
                }}
              >
                <Download size={15} />
                Download
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="enquire-btn"
                style={{
                  borderColor: item.color,
                  color: item.color,
                }}
              >
                <MessageSquare size={15} />
                Enquire
              </a>

            </div>

            <ChevronRight className="arrow" />

          </div>
        ))}

      </section>

    </div>
  )
}

export default Home