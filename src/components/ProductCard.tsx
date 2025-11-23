import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Sparkles } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  customizable?: boolean;
}

export const ProductCard = ({ name, price, image, category, customizable }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-elegant transition-smooth border-border">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full group-hover:scale-110 transition-smooth"
        />
        {customizable && (
          <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
            <Sparkles className="h-3 w-3 mr-1" />
            Personnalisable
          </Badge>
        )}
        <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-2xl font-bold text-primary">{price} DH</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary hover:bg-primary-glow transition-smooth shadow-elegant">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  );
};
