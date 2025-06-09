
export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>🏡 Welcome to Your Lake Retreat</h1>
      <p>1062 East LakeShore Drive | Double Springs, Alabama</p>

      <section>
        <h2>📍 About the Area</h2>
        <ul>
          <li><strong>Double Springs:</strong> ~10 miles - Food, gas, stores</li>
          <li><strong>Walmart (Haleyville):</strong> ~25 min</li>
          <li><strong>Dollar General:</strong> ~10 min</li>
          <li><strong>Lakeshore Marina:</strong> ~8 min - Slips, fuel</li>
          <li><strong>Smith Lake Marina:</strong> ~20 min - Rentals, store</li>
        </ul>
      </section>

      <section>
        <h2>🍽️ Dining</h2>
        <ul>
          <li><strong>Gold Diggers Restaurant:</strong> ~10 min</li>
          <li><strong>Lakeshore Inn Restaurant:</strong> ~10 min</li>
          <li><strong>Grille at Trident Marina:</strong> ~25 min</li>
          <li><strong>Chef Troy’s Talk of the Town:</strong> ~20 min</li>
          <li><strong>Blue Moon BBQ:</strong> ~15 min</li>
        </ul>
      </section>

      <section>
        <h2>🚤 Marinas & Lake Rules</h2>
        <ul>
          <li><strong>Lakeshore Marina:</strong> Slips, fuel, shop</li>
          <li><strong>Smith Lake Marina:</strong> Rentals</li>
        </ul>
        <ul>
          <li>No-wake zones near docks</li>
          <li>Life jackets for kids under 8</li>
          <li>50 mph max (day), 25 mph (night)</li>
          <li>Fishing license required</li>
        </ul>
      </section>

      <section>
        <h2>🎯 Games & Dock Rules</h2>
        <p>Lawn games: Cornhole, Jenga, Ladder Toss, Spikeball</p>
        <ul>
          <li>Supervise children</li>
          <li>No diving from roof</li>
          <li>No glass on dock</li>
        </ul>
      </section>
    </main>
  );
}
