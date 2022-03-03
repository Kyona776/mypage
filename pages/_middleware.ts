import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


//TODO internaltional routing https://nextjs.org/docs/advanced-features/i18n-routing
export function middleware(req: NextRequest, event) {
    if (req.geo.country == 'Japan') {
        console.log('from japan');  
    } else if (req.geo.country == "Taiwan") {
        console.log('from Taiwan');
    }
}