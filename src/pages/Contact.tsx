import ContactUsComponent from "@/components/contactUs/ContactUsComponent"
import { Toaster } from "react-hot-toast"


const Contact = () => {
  return (
    <div>
      	<Toaster position="top-right" reverseOrder={false} />
      <ContactUsComponent/>
    </div>
  )
}

export default Contact
