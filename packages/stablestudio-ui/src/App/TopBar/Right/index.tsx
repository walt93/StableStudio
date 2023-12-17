import { Link } from "react-router-dom";
import { Shortcut } from "~/Shortcut";
import { Theme } from "~/Theme";

export const Right = () => {
  const { setIsOpen } = Shortcut.Palette.use();
  const isMobileDevice = Theme.useIsMobileDevice();
  return (
    <div className="flex grow basis-0 items-center justify-end gap-2">
      <>
        <Link to="/settings">
          <Theme.Button
            outline
            label="Settings"
            labelPlacement="bottom"
            className="aspect-square h-[30px] w-[30px]"
            icon={Theme.Icon.Settings}
          />
        </Link>
      </>
    </div>
  );
};
