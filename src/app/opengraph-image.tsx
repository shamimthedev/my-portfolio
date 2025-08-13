import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Md. Shamim Hossain - Frontend Developer & Digital Marketer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '0 120px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Md. Shamim Hossain
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#9CA3AF',
            textAlign: 'center',
            lineHeight: 1.3,
          }}
        >
          Frontend Developer & Digital Marketer
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#6B7280',
            marginTop: 20,
            textAlign: 'center',
          }}
        >
          GroWise Studio | React • Next.js • Digital Marketing
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}