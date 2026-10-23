import { isTodo } from "@/lib/utils";
import { TodoText } from "@/components/ui/TodoText";

type Props = {
  url?: string;
  title: string;
};

export function extractYouTubeId(urlOrId?: string): string | null {
  if (!urlOrId) return null;
  const trimmed = urlOrId.trim();
  if (!trimmed || isTodo(trimmed)) return null;

  // If directly an 11-character video ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // Matches various YouTube URL formats:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://www.youtube.com/watch?feature=...&v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - https://www.youtube.com/embed/VIDEO_ID
  // - https://www.youtube.com/shorts/VIDEO_ID
  // - https://www.youtube.com/live/VIDEO_ID
  const match = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|live\/|watch\?v=|watch\?.+&v=))([\w-]{11})/,
  );

  return match ? match[1] : null;
}

export function YouTubeEmbed({ url, title }: Props) {
  const videoId = extractYouTubeId(url);

  if (!videoId) {
    if (url && isTodo(url)) {
      return (
        <div className="border-border bg-surface flex aspect-video w-full flex-col items-center justify-center rounded-2xl border p-4 text-center">
          <p className="text-muted font-mono text-xs uppercase tracking-wider">Demo Video</p>
          <div className="mt-2 text-sm">
            <TodoText>{url}</TodoText>
          </div>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="border-border bg-surface aspect-video w-full overflow-hidden rounded-2xl border shadow-sm">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        className="h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
