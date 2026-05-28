import {
  Phone,
  MessageCircle,
  Search,
  Download,
  MessageSquare,
} from "lucide-react"

import "./Home.css"

const tests = [
  {
    name: "Aarogyam B Pro",
    desc: "Download brochure and view complete package details.",
    file: "aarogyam-b-pro.pdf",
    image: "/images/b-pro.jpg",
    color: "#2563eb",
  },

  {
    name: "Aarogyam C Pro",
    desc: "Download brochure and view complete package details.",
    file: "aarogyam-c-pro.pdf",
    image: "/images/c-pro.jpg",
    color: "#ec4899",
  },

  {
    name: "Aarogyam D Pro",
    desc: "Download brochure and view complete package details.",
    file: "aarogyam-d-pro.pdf",
    image: "/images/d-pro.jpg",
    color: "#8b5cf6",
  },

  {
    name: "Aarogyam D Plus",
    desc: "Download brochure and view complete package details.",
    file: "aarogyam-d-plus.pdf",
    image: "/images/d-plus.jpg",
    color: "#f97316",
  },

  {
    name: "HBA1C",
    desc: "Blood sugar monitoring package.",
    file: "hbalc.pdf",
    image: "/images/hbalc.jpg",
    color: "#ef4444",
  },

  {
    name: "Lipid Profile",
    desc: "Complete cholesterol testing package.",
    file: "lipid-profile.pdf",
    image: "/images/lipid.jpg",
    color: "#06b6d4",
  },

  {
    name: "Purush Profile",
    desc: "Complete health checkup for men.",
    file: "aarogyam-purush-profile.pdf",
    image: "/images/purush.jpg",
    color: "#7c3aed",
  },

  {
    name: "Stree Profile",
    desc: "Complete health checkup for women.",
    file: "aarogyam-stree-profile.pdf",
    image: "/images/stree.jpg",
    color: "#ec4899",
  },

  {
    name: "Thyroid Profile",
    desc: "Thyroid hormone testing package.",
    file: "thyroid-basic-profile.pdf",
    image: "/images/thyroid.jpg",
    color: "#6366f1",
  },

  {
    name: "Vitamin B12",
    desc: "Vitamin B12 testing package.",
    file: "vitamin-b12-profile.pdf",
    image: "/images/vitamin-b12.jpg",
    color: "#14b8a6",
  },

  {
    name: "Vitamin D",
    desc: "Vitamin D testing package.",
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

          <p>Trusted Diagnostic Services</p>

        </div>

        <div className="top-icons">

          <a href="tel:+919999999999" className="circle">
            <Phone size={18} />
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="circle green"
          >
            <MessageCircle size={18} />
          </a>

        </div>

      </header>

      {/* HERO */}

      <section className="hero">

        <h2>
          Trusted Tests.
          <br />
          Better Health.
        </h2>

        <p>
          Home Collection • Accurate Reports • Fast Service
        </p>

        <div className="hero-buttons">

          <a href="tel:+919999999999" className="hero-btn white">
            Call Now
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="hero-btn green-btn"
          >
            WhatsApp
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="hero-btn pink"
          >
            Enquiry
          </a>

        </div>

      </section>

      {/* SEARCH */}

      <div className="search-box">

        <Search size={18} className="search-icon" />

        <input
          type="text"
          placeholder="Search tests..."
        />

      </div>

      {/* TEST CARDS */}

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
                  color: item.color,
                }}
              >
                <Download size={16} />
                Download
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="enquire-btn"
                style={{
                  color: item.color,
                }}
              >
                <MessageSquare size={16} />
                Enquire
              </a>

            </div>

          </div>

        ))}

      </section>

    </div>
  )
}

export default Home