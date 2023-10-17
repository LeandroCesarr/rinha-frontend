import { JsonInput } from "@/components/JsonInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-white text-center flex flex-col space-y-4">
        <h1 className="text-5xl font-bold">JSON Tree Viewer</h1>
        <p className="text-2xl">Simple JSON Viewer that runs completely on-client. No data exchange</p>
        <form>
          <JsonInput name="main-json" id="main-json" />
        </form>
      </div>
    </main>
  )
}
