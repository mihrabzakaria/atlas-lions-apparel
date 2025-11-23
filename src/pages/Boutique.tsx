import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import jerseyImage from "@/assets/jersey-red.jpg";
import accessoriesImage from "@/assets/accessories.jpg";

const Boutique = () => {
  const products = [
    {
      id: "1",
      name: "Maillot Maroc Premium Rouge",
      price: 180,
      image: jerseyImage,
      category: "Maillot",
      customizable: true,
    },
    {
      id: "2",
      name: "Short Maroc Premium",
      price: 90,
      image: jerseyImage,
      category: "Short",
      customizable: true,
    },
    {
      id: "3",
      name: "Chaussettes Maroc",
      price: 40,
      image: jerseyImage,
      category: "Chaussettes",
      customizable: false,
    },
    {
      id: "4",
      name: "Pack Complet Supporter",
      price: 280,
      image: jerseyImage,
      category: "Pack",
      customizable: true,
    },
    {
      id: "5",
      name: "Écharpe Supporter",
      price: 50,
      image: accessoriesImage,
      category: "Accessoires",
      customizable: false,
    },
    {
      id: "6",
      name: "Casquette Atlas Lions",
      price: 70,
      image: accessoriesImage,
      category: "Accessoires",
      customizable: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="gradient-secondary py-16 text-white">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Boutique CAN 2025</h1>
            <p className="text-xl text-white/90">
              Tous nos produits premium aux couleurs du Maroc
            </p>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="py-12">
          <div className="container px-4">
            {/* Filter Bar */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm">Tous</Button>
                <Button variant="outline" size="sm">Maillots</Button>
                <Button variant="outline" size="sm">Accessoires</Button>
                <Button variant="outline" size="sm">Packs</Button>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtres
              </Button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Boutique;
