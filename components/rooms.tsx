import { Card, CardContent } from "@/components/ui/card";
import { Users, Bed, Coffee, Wifi, Waves, Flame } from "lucide-react";

export function Rooms() {
  const rooms = [
    {
      title: "Habitación Sencilla King",
      subtitle: "Para 2 personas",
      description:
        "Espaciosa habitación con cama King size, perfecta para parejas que buscan comodidad y privacidad.",
      image: "/rooms/Habitación-King.jpg",
      icon: Users,
      capacity: "2 personas",
      bed: "Cama King",
    },
    {
      title: "Habitación Doble Queen",
      subtitle: "Para 4 personas",
      description:
        "Amplia habitación con dos camas Queen size, ideal para familias que desean disfrutar juntos.",
      image: "/rooms/Habitación-Queen-doble.jpg",
      icon: Users,
      capacity: "4 personas",
      bed: "2 Camas Queen",
    },
  ];

  const amenities = [
    { icon: Coffee, label: "Desayuno incluido" },
    { icon: Flame, label: "Chimenea" },
    { icon: Wifi, label: "WiFi gratis" },
    { icon: Waves, label: "Acceso a alberca" },
  ];

  return (
    <section id="rooms" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl mb-4 text-balance">
            Nuestras Habitaciones
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Espacios diseñados para tu comodidad, con el encanto de la
            arquitectura colonial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {rooms.map((room) => (
            <Card key={room.title} className="overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 md:p-8">
                <h3 className="font-serif text-3xl mb-2">{room.title}</h3>
                <p className="text-foreground font-medium mb-4">{room.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {room.description}
                </p>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-foreground" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed size={18} className="text-foreground" />
                    <span>{room.bed}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h3 className="font-serif text-2xl md:text-3xl mb-8 text-center">
            Todas las habitaciones incluyen
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.label}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <amenity.icon size={24} className="text-foreground" />
                </div>
                <span className="text-sm font-medium">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
