import SignUpComponent from "@/components/signUp/SignUpComponent"
import { Toaster } from "react-hot-toast"


const Signup = () => {
  return (
	<div>
		<Toaster position="top-right" reverseOrder={false} />

		<SignUpComponent/>
	</div>
  )
}

export default Signup