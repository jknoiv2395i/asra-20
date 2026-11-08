import { useState, useCallback } from "react";
import { useAuthFetch } from "@/hooks/useAuth";
import { toast } from "sonner";

interface MediaUploaderProps {
  label: string;
  accept: string;
  files: string[];
  onChange: (files: string[]) => void;
}

export default function MediaUploader({ label, accept, files, onChange }: MediaUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [directUrl, setDirectUrl] = useState("");
  const authFetch = useAuthFetch();

  const uploadFiles = useCallback(async (fileList: FileList) => {
    setUploading(true);
    const formData = new FormData();
    Array.from(fileList).forEach((file) => formData.append("files", file));

    try {
      const res = await authFetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.success && Array.isArray(data.data?.urls)) {
        onChange([...files, ...data.data.urls]);
        toast.success(`${data.data.urls.length} file(s) uploaded successfully!`);
      } else {
        toast.error(data.error || "Upload failed. Please try again.");
      }
    } catch (err: any) {
      console.error("Upload failed:", err);
      toast.error(err.message || "Failed to upload files");
    } finally {
      setUploading(false);
    }
  }, [files, onChange, authFetch]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.length) {
      uploadFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      uploadFiles(e.target.files);
    }
    // Reset input so same file can be selected again
    e.target.value = "";
  };

  const handleAddDirectUrl = () => {
    const trimmed = directUrl.trim();
    if (!trimmed) return;
    onChange([...files, trimmed]);
    setDirectUrl("");
    toast.success("Media link added");
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    onChange(newFiles);
  };

  const isVideo = (url: string) => /\.(mp4|webm|mov)$/i.test(url);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <span className="text-xs text-gray-400">{files.length} attached</span>
      </div>

      {/* Drop zone */}
      <div
        className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${
          dragOver ? "border-[#c9a96e] bg-[#c9a96e]/5" : "border-gray-200 hover:border-gray-300"
        }`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById(`upload-${label}`)?.click()}
      >
        <input
          id={`upload-${label}`}
          type="file"
          multiple
          accept={accept}
          onChange={handleFileInput}
          className="hidden"
        />
        {uploading ? (
          <div className="flex items-center justify-center gap-2 text-[#c9a96e]">
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
              <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-medium">Uploading to server...</span>
          </div>
        ) : (
          <>
            <svg className="w-7 h-7 mx-auto mb-1.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 16V4m0 0l-4 4m4-4l4 4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-xs text-gray-600">
              Drag & drop files here or <span className="text-[#c9a96e] font-semibold">browse</span>
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5">JPG, PNG, WebP or MP4 (Max 50MB)</p>
          </>
        )}
      </div>

      {/* Or Paste Direct Link */}
      <div className="flex items-center gap-2 pt-1">
        <input
          type="text"
          value={directUrl}
          onChange={(e) => setDirectUrl(e.target.value)}
          placeholder="Or paste media URL (e.g. /uploads/... or https://...)"
          className="flex-1 px-3 py-1.5 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-[#c9a96e]"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddDirectUrl();
            }
          }}
        />
        <button
          type="button"
          onClick={handleAddDirectUrl}
          disabled={!directUrl.trim()}
          className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold disabled:opacity-40 transition-colors"
        >
          Add URL
        </button>
      </div>

      {/* Previews */}
      {files.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 pt-2">
          {files.map((url, i) => (
            <div key={i} className="relative group rounded-xl overflow-hidden border border-gray-200 aspect-square bg-gray-50 shadow-sm">
              {isVideo(url) ? (
                <video src={url} className="w-full h-full object-cover" muted />
              ) : (
                <img src={url} alt="" className="w-full h-full object-cover" />
              )}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                className="absolute top-1 right-1 w-6 h-6 bg-red-600/90 text-white rounded-full flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-opacity text-xs font-bold shadow-md hover:bg-red-700"
                title="Remove"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
