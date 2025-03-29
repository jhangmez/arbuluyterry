export function apiImage(imageUrl: string | null | undefined): string {
  if (!imageUrl) {
    return "/images/no_encontrado_arbuluyterry.webp";
  }
  return `/api/image?url=${encodeURIComponent(imageUrl)}`;
}
