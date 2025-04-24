
import { useParams } from "react-router-dom"
import { partners } from "./partners"
import { ArrowLeft,} from "lucide-react"
import { Link } from "react-router-dom"
import CommonWrapper from "@/common/CommonWrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@radix-ui/react-select"


export default function PartnerDetailsPage() {
  const { id } = useParams()
  const partner = partners.find((p) => p.id === id)

  if (!partner) {
    return (
      <CommonWrapper>
        <div className="flex flex-col items-center justify-center min-h-[50vh] py-12 px-4">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-destructive">Partner Not Found</h2>
            <p className="text-muted-foreground">We couldn't find the partner you're looking for.</p>
            <Button asChild variant="default">
              <Link to="/partners" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Partners
              </Link>
            </Button>
          </div>
        </div>
      </CommonWrapper>
    )
  }

  return (
    <CommonWrapper>
      <div className="mx-auto py-8 px-4 md:px-6 lg:py-18">
        <div className="mb-6">
   

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-blue">
            Partner <span className="text-primary-orange">Details</span>
          </h1>
        </div>

        <Card className="overflow-hidden border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 pb-8 p-4">
            <div className=" mx-auto">
            <div className="w-full h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[250px]">
  <img
    src={partner.logo || "/placeholder.svg"}
    alt={`${partner.name} logo`}
    className="w-full h-auto object-contain"
  />
</div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
              <div className="flex-1 text-center md:text-left">
            
             
                <div className="mt-4">
                  <p className="text-slate-700 leading-relaxed">{partner.description}</p>
            
                </div>
   
            
              </div>
            </div>
          
            
          </CardHeader>

          <CardContent className="pt-6 pb-8 px-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">Partnership Details</h3>
                <Separator className="mb-4 bg-slate-200 h-0.5" />
                <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-md">
                  {partner.partnershipDetails}
                </p>

                <div className="mt-4 text-end">
      <button  className="px-3 py-2 rounded-lg bg-primary-blue text-white hover:bg-primary-orange" >
        More Details
      </button>
    </div>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3 text-primary-blue">Collaboration Areas</h3>
                <Separator className="mb-4 bg-slate-200 h-0.5" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{generateCollaborationAreas(partner.id)}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CommonWrapper>
  )
}

function generateCollaborationAreas(partnerId: string) {
  // Generate some collaboration areas based on partner ID
  const areas: Record<string, string[]> = {
    nvidia: ["AI & Machine Learning", "GPU Computing", "Graphics Solutions", "Data Science"],
    micron: ["Memory Solutions", "Storage Technology", "Data Centers", "Enterprise Systems"],
    supermicro: ["Server Infrastructure", "Cloud Solutions", "Enterprise Computing", "Data Centers"],
    gigabyte: ["Motherboard Solutions", "Hardware Integration", "Gaming Technology", "Workstations"],
    asus: ["Consumer Electronics", "Computing Hardware", "Mobile Solutions", "Gaming Technology"],
    intel: ["Processor Technology", "Computing Solutions", "Data Centers", "IoT Applications"],
    amd: ["CPU Solutions", "GPU Technology", "High-Performance Computing", "Gaming Hardware"],
  }

  return (
    areas[partnerId] || ["Technology Integration", "Product Development", "Research & Development", "Market Solutions"]
  ).map((area, index) => (
    <div
      key={index}
      className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-100 rounded-md shadow-sm hover:shadow transition-shadow"
    >
      <div className="h-3 w-3 rounded-full bg-primary-orange"></div>
      <span className="text-slate-700">{area}</span>
    </div>
  ))
}
