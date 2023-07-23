import CarGrid from "@/components/CarGrid"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-950">
        <CarGrid />
    </main>
  )
}