import { Avatar as Ava, AvatarFallback, AvatarImage } from "#/components/ui/avatar";

export default function Avatar({ src, alt, className }: { src: string, alt: string, className?: string }) {
    return (<Ava className={className}>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback className={"font-semibold bg-primary text-white text-base"}>{alt[0]}</AvatarFallback>
    </Ava>)
}