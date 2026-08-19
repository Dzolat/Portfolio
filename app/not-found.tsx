import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="gap-4 font-bold text-2xl h-screen flex flex-col justify-center items-center text-center content-center">
      <div className="flex gap-4">
        <h1>404</h1>
        <p>|</p>
        <p>Not Found</p>
      </div>
      <Button className="rounded-full" render={<Link href="/"/>}>
        Go to home
      </Button>
    </div>
  )
}