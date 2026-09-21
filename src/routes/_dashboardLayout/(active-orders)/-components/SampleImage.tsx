
export default function SampleImage({ revisionImage }: { revisionImage: string }) {
    return (
        <div className="overflow-hidden rounded-2xl bg-muted">
            <img
                src={revisionImage}
                alt="Latest digital proof for the sample"
                className="aspect-[1.5] h-auto w-full object-cover"
            />
        </div>
    )
}