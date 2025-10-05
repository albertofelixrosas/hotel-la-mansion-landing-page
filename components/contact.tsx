"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl mb-4 text-balance">{t.contact.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="font-serif text-2xl mb-6">{t.contact.contactInfo}</h3>

            <div className="space-y-6 mb-8">
              <a
                href="https://wa.me/526471065525"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-accent/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">{t.contact.whatsappLabel}</p>
                  <p className="text-muted-foreground">+52 647 106 5525</p>
                </div>
              </a>

              <a
                href="mailto:jojonm@mac.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-accent/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="text-foreground" size={24} />
                </div>
                <div>
                  <p className="font-medium">{t.contact.emailLabel}</p>
                  <p className="text-muted-foreground">jojonm@mac.com</p>
                </div>
              </a>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold mb-4">{t.contact.alsoFindUs}</h4>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.booking.com/Share-9qkYyT" target="_blank" rel="noopener noreferrer">
                    Booking.com
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://expe.app.link/pLMXxkAAcXb" target="_blank" rel="noopener noreferrer">
                    Expedia
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://hotels.app.link/QCWkvcDAcXb" target="_blank" rel="noopener noreferrer">
                    Hotels.com
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.tripadvisor.com.mx/Hotel_Review-g499429-d594293-Reviews-Hotel_La_Mansion-Alamos_Northern_Mexico.html?m=19905" target="_blank" rel="noopener noreferrer">
                    TripAdvisor
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.agoda.com/es-es/hotel-la-mansion/hotel/all/alamos-mx.html?countryId=86&finalPriceView=1&isShowMobileAppPrice=false&cid=1918349&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2025-10-9&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=MXN&isFreeOccSearch=false&los=1&searchrequestid=e012b177-eedf-45f6-a807-df5291d05ef2&ds=nJGapONkFnVtOGdg" target="_blank" rel="noopener noreferrer">
                    Agoda
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.despegar.com.mx/accommodations/results/CIT_8250/2025-10-09/2025-10-10/2?chosen_accommodation=5156670&google_site=localuniversal&displayed_price=2272.78&country=MX&lang=es&crawler=false&partner=4&hotprv=cHc6RVhQ&utm_source=HPA&utm_medium=referral&utm_term=5156670_322796524_localuniversal_MX_es_MXN_18.39859962_2025_10_09_1_2272.78_362.82_false&utm_content=MX&utm_campaign=20371800406&cc=MX&key=UT81AK9JAFEGJ4D69OVO6J673E&utm_semhotelcampaign=1&selected_room_pack=275407515&gad_source=1&gad_campaignid=20371800406&gbraid=0AAAAAC-UydKOnNIoRhPW9Xplgam571rlT&gclid=CjwKCAjwi4PHBhA-EiwAnjTHubReWuk4I0JlZuOPcQvFOIg0l6yvWEtYmG_K4xhOk6B0QPNxqWtsqRoCJMAQAvD_BwE&mktdata=kw%3D5156670_322796524_localuniversal_MX_es_MXN_18.39859962_2025_10_09_1_2272.78_false%26clt_c%3DHPA-MX%26clt_n%3Dh%26d%3Dc%26cm%3DHPA_MX%26pr%3DH%26campaignid%3D20371800406%26targetid%3Daud-%26hpa_dd%3Ddefault%26hpa_ppa%3D0%26google_site%3Dlocaluniversal%26displayed_price%3D2272.78%26country%3DMX%26lang%3Des%26crawler%3Dfalse%26partner%3D4%26hotprv%3DcHc6RVhQ%26utm_source%3DHPA%26utm_medium%3Dreferral%26utm_term%3D5156670_322796524_localuniversal_MX_es_MXN_18.39859962_2025_10_09_1_2272.78_362.82_false%26utm_content%3DMX%26utm_campaign%3D20371800406%26cc%3DMX%26key%3DUT81AK9JAFEGJ4D69OVO6J673E%26utm_semhotelcampaign%3D1%26selected_room_pack%3D275407515%26gad_source%3D1%26gad_campaignid%3D20371800406%26gbraid%3D0AAAAAC-UydKOnNIoRhPW9Xplgam571rlT%26gclid%3DCjwKCAjwi4PHBhA-EiwAnjTHubReWuk4I0JlZuOPcQvFOIg0l6yvWEtYmG_K4xhOk6B0QPNxqWtsqRoCJMAQAvD_BwE%26id%3D20251004222402147247927695187306%26trackeame_user_id%3D8bdd4884-f107-4a89-9c69-8b4dcfbdafe1&searchId=7d1dbf4e-93e2-4264-b08d-830ec89a6e4e" target="_blank" rel="noopener noreferrer">
                    Despegar
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-6">{t.contact.ourLocation}</h3>
            
            {/* Google Maps iframe */}
            <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.234567890123!2d-108.9375!3d27.0267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c815f9d1234567%3A0x1234567890abcdef!2sBenito%20Ju%C3%A1rez%2020%2C%20Centro%2C%2085760%20%C3%81lamos%2C%20Son.%2C%20Mexico!5e0!3m2!1sen!2smx!4v1699123456789!5m2!1sen!2smx"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel La Mansión - Ubicación"
              />
            </div>

            {/* Información de ubicación */}
            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-accent"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
{t.contact.locationDetails}
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-muted">
                  <span className="text-sm font-medium text-muted-foreground">{t.contact.addressLabel}</span>
                  <span className="text-sm">{t.contact.address}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-muted">
                  <span className="text-sm font-medium text-muted-foreground">{t.contact.postalCodeLabel}</span>
                  <span className="text-sm">{t.contact.postalCode}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-muted">
                  <span className="text-sm font-medium text-muted-foreground">{t.contact.cityLabel}</span>
                  <span className="text-sm">{t.contact.city}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-muted">
                  <span className="text-sm font-medium text-muted-foreground">{t.contact.stateLabel}</span>
                  <span className="text-sm">{t.contact.state}</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium text-muted-foreground">{t.contact.countryLabel}</span>
                  <span className="text-sm">{t.contact.country}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-muted">
                <p className="text-xs text-muted-foreground text-center">
                  {t.contact.locationNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
