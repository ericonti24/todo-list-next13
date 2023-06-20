import { NextResponse } from "next/server"
import todos from './data.json'

export async function GET(request) {
    return NextResponse.json(todos)
}