"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Users, Bed, Coffee, Wifi, Waves, Flame, Snowflake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Rooms() {
  const { t } = useLanguage();
  const rooms = [
    {
      title: t.rooms.room1.title,
      subtitle: t.rooms.room1.subtitle,
      description: t.rooms.room1.description,
      image: "/rooms/Habitación-King.jpg",
      icon: Users,
      capacity: t.rooms.room1.capacity,
      bed: t.rooms.room1.bed,
    },
    {
      title: t.rooms.room2.title,
      subtitle: t.rooms.room2.subtitle,
      description: t.rooms.room2.description,
      image: "/rooms/Habitación-Queen-doble.jpg",
      icon: Users,
      capacity: t.rooms.room2.capacity,
      bed: t.rooms.room2.bed,
    },
  ];

  const amenities = [
    { icon: Coffee, label: t.rooms.amenities.breakfast },
    { icon: Flame, label: t.rooms.amenities.fireplace },
    { icon: Wifi, label: t.rooms.amenities.wifi },
    { icon: Waves, label: t.rooms.amenities.pool },
    { icon: Snowflake, label: t.rooms.amenities.ac },
  ];

  return (
    <section id="rooms" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl mb-4 text-balance">
            {t.rooms.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.rooms.subtitle}
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
            {t.rooms.amenitiesTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
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
