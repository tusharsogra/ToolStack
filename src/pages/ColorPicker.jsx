import React, { useState, useRef } from 'react';
import { Copy, Check } from 'lucide-react';

export default function ColorPicker() {
  const [color, setColor] = useState('#3B82F6');
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };

  // Convert RGB to Hex
  const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
  };

  // Handle canvas click
  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(x, y, 1, 1);
    const pixel = imageData.data;

    const newColor = rgbToHex(pixel[0], pixel[1], pixel[2]);
    setColor(newColor);
  };

  // Handle color input change
  const handleColorInputChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
  };

  // Copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Draw gradient on canvas
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Create horizontal hue gradient
    const hueGradient = ctx.createLinearGradient(0, 0, width, 0);
    for (let i = 0; i <= 360; i += 1) {
      const hue = i;
      hueGradient.addColorStop(i / 360, `hsl(${hue}, 100%, 50%)`);
    }
    ctx.fillStyle = hueGradient;
    ctx.fillRect(0, 0, width, height / 2);

    // Create vertical saturation/brightness gradient
    const saturationGradient = ctx.createLinearGradient(0, height / 2, 0, height);
    saturationGradient.addColorStop(0, 'rgb(255, 255, 255)');
    saturationGradient.addColorStop(0.5, 'rgb(128, 128, 128)');
    saturationGradient.addColorStop(1, 'rgb(0, 0, 0)');
    ctx.fillStyle = saturationGradient;
    ctx.fillRect(0, height / 2, width, height / 2);
  }, []);

  // Draw crosshair pointer
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Redraw gradient
    const width = canvas.width;
    const height = canvas.height;

    const hueGradient = ctx.createLinearGradient(0, 0, width, 0);
    for (let i = 0; i <= 360; i += 1) {
      const hue = i;
      hueGradient.addColorStop(i / 360, `hsl(${hue}, 100%, 50%)`);
    }
    ctx.fillStyle = hueGradient;
    ctx.fillRect(0, 0, width, height / 2);

    const saturationGradient = ctx.createLinearGradient(0, height / 2, 0, height);
    saturationGradient.addColorStop(0, 'rgb(255, 255, 255)');
    saturationGradient.addColorStop(0.5, 'rgb(128, 128, 128)');
    saturationGradient.addColorStop(1, 'rgb(0, 0, 0)');
    ctx.fillStyle = saturationGradient;
    ctx.fillRect(0, height / 2, width, height / 2);

    // Draw circle indicator
    const rgb = hexToRgb(color);
    const imageData = ctx.createImageData(1, 1);
    imageData.data[0] = rgb.r;
    imageData.data[1] = rgb.g;
    imageData.data[2] = rgb.b;
    imageData.data[3] = 255;

    // Find position on canvas
    let x = 0, y = 0;
    for (let px = 0; px < width; px++) {
      for (let py = 0; py < height; py++) {
        const data = ctx.getImageData(px, py, 1, 1).data;
        if (
          data[0] === rgb.r &&
          data[1] === rgb.g &&
          data[2] === rgb.b
        ) {
          x = px;
          y = py;
          break;
        }
      }
    }

    // Draw crosshair
    ctx.strokeStyle = color === '#FFFFFF' || color === '#000000' ? 'rgba(128,128,128,0.8)' : 'rgba(255,255,255,0.8)';
    ctx.lineWidth = 2;
    
    // Vertical line
    ctx.beginPath();
    ctx.moveTo(x, y - 12);
    ctx.lineTo(x, y + 12);
    ctx.stroke();

    // Horizontal line
    ctx.beginPath();
    ctx.moveTo(x - 12, y);
    ctx.lineTo(x + 12, y);
    ctx.stroke();

    // Circle
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.stroke();
  }, [color]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 py-20">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">Color Picker</h1>
        
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          {/* Canvas */}
          <div ref={containerRef} className="mb-6 rounded overflow-hidden border-2 border-gray-700 cursor-crosshair">
            <canvas
              ref={canvasRef}
              width={400}
              height={300}
              onClick={handleCanvasClick}
              className="w-full block"
            />
          </div>

          {/* Color Input */}
          <div className="flex gap-3 mb-6">
            <input
              type="color"
              value={color}
              onChange={handleColorInputChange}
              className="w-16 h-16 rounded cursor-pointer border-2 border-gray-700"
            />
            <div className="flex-1">
              <label className="block text-gray-400 text-sm mb-2">Hex Color</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={color}
                  onChange={handleColorInputChange}
                  className="flex-1 px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:border-gray-500"
                  placeholder="#000000"
                />
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-2 bg-gray-800 text-white rounded border border-gray-600 hover:bg-gray-700 transition flex items-center gap-2"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Color Display */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-gray-400 text-xs mb-2">HEX</p>
              <p className="text-white font-mono text-sm">{color}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-2">RGB</p>
              <p className="text-white font-mono text-sm">
                {hexToRgb(color).r}, {hexToRgb(color).g}, {hexToRgb(color).b}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-2">Preview</p>
              <div
                className="w-full h-8 rounded border-2 border-gray-600"
                style={{ backgroundColor: color }}
              />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <p className="text-gray-500 text-sm mt-6 text-center">
          Click on the gradient to pick a color, use the color input, or move the pointer
        </p>
      </div>
    </div>
  );
}