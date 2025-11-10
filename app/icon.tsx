import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Image metadata - using very large size for maximum quality (8xl equivalent)
export const size = {
  width: 32 * 16,
  height: 32 * 16,
};

export const contentType = 'image/png';

// Image generation
export default async function Icon() {
  try {
    // Read the logo file directly from the file system
    const filePath = join(process.cwd(), 'public', 'dsmainlogo.png');
    const logoBuffer = await readFile(filePath);
    const logoBase64 = logoBuffer.toString('base64');
    const logoDataUrl = `data:image/png;base64,${logoBase64}`;

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

          }}
        >
          <img
            src={logoDataUrl}
            alt="DS Logo"
            style={{
              width: '200%',
              height: '200%',

            }}
          />
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    console.error('Error generating icon:', error);
    // Fallback to a simple icon if logo can't be loaded
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: '#0d0f10',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#D9D9D9',
            fontWeight: 'bold',
          }}
        >
          DS
        </div>
      ),
      {
        ...size,
      }
    );
  }
}

