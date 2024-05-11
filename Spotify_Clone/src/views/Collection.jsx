import React from "react";
import Kitaplık from "../data/Kitaplık";
import Title from "../components/bottomBar/Title";
import KitaplıkItem from "../components/bottomBar/KitaplıkItem";

function Collection() {
  return (
    <section>
      <Title title="Kitaplığın" />
      <div className="grid grid-cols-5 gap-6">
        {Kitaplık.map((kitap, index) => (
          <KitaplıkItem key={index} kitap={kitap} />
        ))}
      </div>
    </section>
  );
}

export default Collection;
