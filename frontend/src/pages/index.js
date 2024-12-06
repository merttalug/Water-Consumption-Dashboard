//HTTP istekleri yapmak, React stateleri kullanmak ve sayfalar arasında gezinmek için gerekli kütüphaneler eklendi.
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

//GET isteği yaparak backenddeki verileri alıp frontende props olarak gönderecek metot. Anasayfa statik oluşturuldu.Hata mesajı eklendi.(API isteğinin başarısız olması durumunda)
export async function getStaticProps() {
  try {
    const res = await axios.get("http://localhost:4000/buildings");
    return { props: { buildings: res.data } };
  } catch (error) {
    console.error("Error fetching buildings:", error);
    return { props: { buildings: [] } };
  }
}

//AnaSayfa bileşeninde buildings propsunu alarak query oluşturma, listede gezinme ve filtreleme işlemleri için metot.
export default function Home({ buildings }) {
  const [query, setQuery] = useState("");

  // Filtreleme işlemi (isim veya konumda arama yapar)
  const filteredBuildings = buildings.filter(
    (building) =>
      building.name.toLowerCase().includes(query.toLowerCase()) ||
      building.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Building List</h1>
      {/* Arama Kutusu */}
      <input
        type="text"
        placeholder="Search by name or location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {/* Tablo Görünümü */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Location
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Total Monthly Water Consumption (L)
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredBuildings.map((building) => (
            <tr key={building.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {building.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {building.location}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {building.totalConsumption}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <Link href={`/buildings/${building.id}`} legacyBehavior>
                  <a style={{ color: "#0070f3", textDecoration: "underline" }}>
                    View Details
                  </a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
