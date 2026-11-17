import { toPng } from "html-to-image";

function DownloadButton({ artworkRef }) {
  async function downloadImage() {
    if (!artworkRef.current) return;

    try {
      const dataUrl = await toPng(artworkRef.current, {
        pixelRatio: 3,
      });

      const link = document.createElement("a");
      link.download = "my-bookstack.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Download failed:", error);
    }
  }

  return (
    <button
      onClick={downloadImage}
      className="mt-6 bg-[#D99591] text-[#30283F]
                 px-6 py-3 rounded-xl font-semibold
                 cursor-pointer hover:opacity-90"
    >
      Download PNG
    </button>
  );
}

export default DownloadButton;