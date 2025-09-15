"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Users, Bed, Euro } from "lucide-react"

interface ApartmentsFiltersProps {
  dict: any
}

export function ApartmentsFilters({ dict }: ApartmentsFiltersProps) {
  const [priceRange, setPriceRange] = useState([50, 200])
  const [capacity, setCapacity] = useState<number[]>([])
  const [bedrooms, setBedrooms] = useState<number[]>([])
  const [amenities, setAmenities] = useState<string[]>([])

  const amenitiesList = [
    "WiFi gratuito",
    "Aire acondicionado",
    "Piscina",
    "Parking",
    "Vista al mar",
    "Balcón/Terraza",
    "Cocina completa",
    "Lavadora",
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Euro className="w-5 h-5" />
            Precio por noche
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={300} min={30} step={10} className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>€{priceRange[0]}</span>
            <span>€{priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Capacidad
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {[2, 4, 6, 8].map((num) => (
              <Label key={num} className="flex items-center space-x-2 cursor-pointer">
                <Checkbox
                  checked={capacity.includes(num)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setCapacity([...capacity, num])
                    } else {
                      setCapacity(capacity.filter((c) => c !== num))
                    }
                  }}
                />
                <span>{num} personas</span>
              </Label>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bed className="w-5 h-5" />
            Dormitorios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((num) => (
              <Label key={num} className="flex items-center space-x-2 cursor-pointer">
                <Checkbox
                  checked={bedrooms.includes(num)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setBedrooms([...bedrooms, num])
                    } else {
                      setBedrooms(bedrooms.filter((b) => b !== num))
                    }
                  }}
                />
                <span>
                  {num} {num === 1 ? "dormitorio" : "dormitorios"}
                </span>
              </Label>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Servicios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {amenitiesList.map((amenity) => (
              <Label key={amenity} className="flex items-center space-x-2 cursor-pointer">
                <Checkbox
                  checked={amenities.includes(amenity)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setAmenities([...amenities, amenity])
                    } else {
                      setAmenities(amenities.filter((a) => a !== amenity))
                    }
                  }}
                />
                <span className="text-sm">{amenity}</span>
              </Label>
            ))}
          </div>
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full bg-transparent">
        Limpiar filtros
      </Button>
    </div>
  )
}
