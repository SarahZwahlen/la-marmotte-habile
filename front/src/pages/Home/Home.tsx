import data from "../../data";

const Home = () => {
  return (
    <main>
      <h2>Galerie</h2>
      {data.map((element: any) => (
        <div>Serpentine</div>
      ))}
    </main>
  );
};

export default Home;
