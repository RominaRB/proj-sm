import AppLayout from "../../components/AppLayout"
import Introduccion from "../../components/CasaLlave/Introduccion"
import ListItems from "../../components/CasaLlave/ListItems"
import Faqs from "../../components/CasaLlave/Faqs"
import Ventajas from "../../components/CasaLlave/Ventajas"

export default function LLaveEnMano() {
  return (
    <AppLayout>
      <Introduccion />
      <ListItems />
      <Faqs />
      <Ventajas />
    </AppLayout>
  )
}
