"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { Button } from "@/components/ui/button"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PDFViewerProps {
  url: string
}

export default function PDFViewer({ url }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  return (
    <div className="h-full flex flex-col">
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width={600} />
      </Document>
      <div className="flex justify-between items-center mt-4">
        <Button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
          Previous
        </Button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <Button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= (numPages || 0)}>
          Next
        </Button>
      </div>
    </div>
  )
}

