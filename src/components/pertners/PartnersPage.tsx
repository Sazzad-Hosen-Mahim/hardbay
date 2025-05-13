import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { partners } from "./partners"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CommonWrapper from "@/common/CommonWrapper"

export default function PartnersPage() {
  return (
    <CommonWrapper>
      <div className="mx-auto py-12 px-4 md:py-10 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary-blue">
            Our <span className="text-primary-orange">Technology</span> Partners
          </h1>
          <p className="mx-auto max-w-[700px]  md:text-xl text-gray-600">
            We collaborate with industry-leading technology companies to deliver innovative solutions for our customers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-4 lg:grid-cols-7">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={`#${partner.id}`}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>

        <div className="space-y-12">
          {partners.map((partner) => (
            <Card key={partner.id} id={partner.id} className="overflow-hidden">
              <div className="md:flex">
                <div className="flex items-center justify-center p-8 bg-white md:w-1/4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-24 w-auto object-contain"
                  />
                </div>
                <div className="md:w-3/4">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary-blue">{partner.name}</CardTitle>
                    <CardDescription className="text-base text-gray-600">{partner.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium mb-2 pt-2 text-primary-orange text-lg">Our Partnership</h3>
                    <p className="text-gray-600">
                      {partner.partnershipDetails.length > 180
                        ? partner.partnershipDetails.slice(0, 180) + "..."
                        : partner.partnershipDetails}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={`/partners/${partner.id}`} // <-- changed this line
                      className="inline-flex items-center mt-3 px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-orange transition group"
                    >
                      See More
                      <ArrowRight className="ml-2 h-4 w-4 text-primary-orange group-hover:text-white" />
                    </Link>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </CommonWrapper>
  )
}
