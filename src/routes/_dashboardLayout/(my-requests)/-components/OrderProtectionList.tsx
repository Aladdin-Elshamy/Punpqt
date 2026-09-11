import Check from "#/common/icons/Check";
import Shield from "#/common/icons/Shield";

export default function OrderProtectionList() {
  return (
    <>
      <div className="my-5 border-t border-border/80" />
      <div className="grid gap-4 font-semibold">
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <Shield className="size-4.5 text-primary" />
          <span className="trim">Escrow protected payment</span>
        </p>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <Check className="size-4.5 text-primary" />
          <span className="trim">Sample approval before production</span>
        </p>
      </div>
    </>
  );
}