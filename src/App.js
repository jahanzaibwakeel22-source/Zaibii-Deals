import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  const products = [
    { id: 1, name: "Wireless Headphones", lowest: "$29", highest: "$42", stores: "Amazon, Daraz", commission: "8%" },
    { id: 2, name: "Smart Watch", lowest: "$45", highest: "$59", stores: "Shopify, Amazon", commission: "10%" },
    { id: 3, name: "Gaming Mouse", lowest: "$18", highest: "$27", stores: "AliExpress, Amazon", commission: "6%" }
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "40px", fontFamily: "Segoe UI, sans-serif", backgroundColor: "#f4f7f6", minHeight: "100vh" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#2c3e50", fontSize: "2.8rem", fontWeight: "800" }}>Zaibii Deals</h1>
        <p style={{ color: "#7f8c8d", fontSize: "1.1rem" }}>Premium Affiliate & Store Management System</p>
      </header>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <input
          type="text"
          placeholder="Search products, stores or commissions..."
          style={{ width: "100%", padding: "18px 25px", borderRadius: "50px", border: "none", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", outline: "none", fontSize: "16px", marginBottom: "40px" }}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
          {filtered.map((p) => (
            <div key={p.id} style={{ background: "white", padding: "25px", borderRadius: "20px", boxShadow: "0 15px 35px rgba(0,0,0,0.03)", border: "1px solid #f0f0f0", transition: "transform 0.3s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <h3 style={{ margin: 0, color: "#34495e" }}>{p.name}</h3>
                <span style={{ background: "#e8f5e9", color: "#2e7d32", padding: "4px 10px", borderRadius: "8px", fontSize: "12px", fontWeight: "bold" }}>{p.commission}</span>
              </div>
              <p style={{ color: "#7f8c8d", fontSize: "14px" }}><b>Price Range:</b> {p.lowest} - {p.highest}</p>
              <p style={{ color: "#bdc3c7", fontSize: "12px", fontStyle: "italic" }}>Stores: {p.stores}</p>
              <button style={{ width: "100%", padding: "14px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: "bold", marginTop: "20px", fontSize: "15px" }}>
                Generate Affiliate Link
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}import React, { useState } from "react";

export default function ZaibiiDealsApp() {
  const [query, setQuery] = useState("");

  const products = [
    { id: 1, name: "Wireless Headphones", lowest: "$29", highest: "$42", stores: "Amazon, Daraz", commission: "8%" },
    { id: 2, name: "Smart Watch", lowest: "$45", highest: "$59", stores: "Shopify, Amazon", commission: "10%" },
    { id: 3, name: "Gaming Mouse", lowest: "$18", highest: "$27", stores: "AliExpress, Amazon", commission: "6%" }
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // Styles object for professional look
  const styles = {
    container: { padding: "40px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f4f7f6", minHeight: "100vh" },
    header: { textAlign: "center", color: "#2c3e50", marginBottom: "30px" },
    searchBar: { padding: "12px 20px", width: "100%", maxWidth: "400px", borderRadius: "25px", border: "1px solid #ddd", display: "block", margin: "0 auto 40px", fontSize: "16px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" },
    card: { backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", border: "1px solid #eee" },
    badge: { backgroundColor: "#e8f5e9", color: "#2e7d32", padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" },
    button: { width: "100%", padding: "12px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", marginTop: "15px" },
    sectionTitle: { borderBottom: "2px solid #3498db", display: "inline-block", paddingBottom: "5px", marginTop: "40px", color: "#2c3e50" }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '5px'}}>Zaibii Deals</h1>
        <p style={{color: '#7f8c8d'}}>Premium Affiliate & Referral Marketplace</p>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.searchBar}
      />

      <div style={styles.grid}>
        {filtered.map((p) => (
          <div key={p.id} style={styles.card}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h3 style={{margin: '0', color: '#2c3e50'}}>{p.name}</h3>
              <span style={styles.badge}>{p.commission}</span>
            </div>
            <p style={{fontSize: '14px', color: '#666', marginTop: '15px'}}>
              <b>Price:</b> {p.lowest} - {p.highest}
            </p>
            <p style={{fontSize: '13px', color: '#95a5a6'}}>Stores: {p.stores}</p>
            <button 
              style={styles.button}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
            >
              Get Affiliate Link
            </button>
          </div>
        ))}
      </div>

      <div style={{marginTop: '50px', display: 'flex', gap: '40px', flexWrap: 'wrap'}}>
        <div>
          <h2 style={styles.sectionTitle}>Affiliate Program</h2>
          <ul style={{lineHeight: '2'}}>
            <li>Referral earnings system</li>
            <li>Direct commission tracking</li>
            <li>Merchant dashboard access</li>
          </ul>
        </div>
        <div>
          <h2 style={styles.sectionTitle}>Admin Control</h2>
          <ul style={{lineHeight: '2'}}>
            <li>Total payout management</li>
            <li>User activity analytics</li>
            <li>Store approval system</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
