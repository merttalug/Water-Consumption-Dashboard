//HTTP isteklerini yapmak için axios kütüphanesini eklendi. Kullanıcıyı anasayfadan detay sayfalarına yönlendirmek için next/link bileşeni eklendi.
import axios from "axios";
import Link from "next/link";

// Backendden dinamik olarak veri çekecek metot oluşturuldu.
export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    // Backend'den bina detaylarını çekiyoruz
    const res = await axios.get(`http://localhost:4000/buildings/${id}`);
    return { props: { building: res.data } };
  } catch (error) {
    // Eğer 404 hatası dönerse
    if (error.response && error.response.status === 404) {
      return { props: { building: null } };
    }
    // Diğer hatalar için
    return { props: { building: null } };
  }
}

//building propsunu alarak bina detaylarını gösteren ana bileşen oluşturuldu.
export default function BuildingDetails({ building }) {
  if (!building) {
    // Eğer bina bulunamazsa mesaj gösteriyoruz
    return (
      <div className="container">
        <h1>Building Not Found</h1>
        <p>The building you are looking for does not exist or was removed.</p>
        <Link href="/" legacyBehavior>
          <a style={{ display: "block", marginTop: "20px", color: "#0070f3" }}>
            ← Back to Building List
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{building.name}</h1>
      <p>Location: {building.location}</p>
      <h2>Daily Water Usage (Last 7 Days)</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Water Usage (L)</th>
          </tr>
        </thead>
        <tbody>
          {building.dailyUsage.map((usage, index) => (
            <tr key={index}>
              <td>Day {index + 1}</td>
              <td>{usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/" legacyBehavior>
        <a style={{ display: "block", marginTop: "20px", color: "#0070f3" }}>
          ← Back to Building List
        </a>
      </Link>
    </div>
  );
}
