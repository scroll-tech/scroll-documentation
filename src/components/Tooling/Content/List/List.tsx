import styles from "./List.module.css"
import LinesEllipsis from "../../../../components/LinesEllipsis"
import { clsx } from "~/lib"

const List = ({ tools, onChange, selectedTool }) => {
  const handleReflow = (value) => {
    // don't trigger measure when the height exceeds the standard height by default
    // if (!isExpended && cardRef.current!.clientHeight > standardHeight) {
    //   return
    // }
    // onResize()
  }

  return (
    <div className={clsx(styles.toolsContainerList, "bg-[#ffffff] dark:bg-dark-normal")}>
      {tools.map((tool, index) => (
        <div
          onClick={() => onChange(tool)}
          className={clsx(
            styles.toolItem,
            tool.id === selectedTool?.id && "bg-[#f9f9f9] dark:bg-black",
            "hover:bg-[#f9f9f9] dark:hover:bg-black"
          )}
        >
          <img
            src={tool.remarkPluginFrontmatter.logo.src}
            alt={tool.remarkPluginFrontmatter.logo.alt}
            className={styles.logo}
          />
          <div className={styles.toolInfo}>
            <div className="flex justify-between items-center mb-[7px]">
              <div className={clsx(styles.toolName, "dark:text-white-800 dark:hover:text-white")}>
                {tool.remarkPluginFrontmatter.name}
                <svg
                  className="ml-[8px] mr-[25px] hover:opacity-70"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="15"
                  viewBox="0 0 12 15"
                  fill="none"
                  onClick={() => window.open(tool.remarkPluginFrontmatter.website, "_blank")}
                >
                  <g clip-path="url(#clip0_781_1088)">
                    <path
                      d="M11.9944 5.75C11.9944 5.59833 11.9389 5.44922 11.8241 5.33766L7.02413 0.67099C6.90938 0.559063 6.756 0.50474 6.6 0.50474V0.5H3C1.34588 0.5 0 1.80849 0 3.41667V11.5833C0 13.1915 1.34588 14.5 3 14.5H9C10.6541 14.5 12 13.1915 12 11.5833V5.75H11.9944ZM7.2 2.49172L9.95175 5.16703H9C8.00738 5.16703 7.2 4.38208 7.2 3.41703V2.49172ZM9 13.3333H3C2.00738 13.3333 1.2 12.5484 1.2 11.5833V3.41667C1.2 2.45161 2.00738 1.66667 3 1.66667H6V3.41667C6 5.02484 7.34588 6.33333 9 6.33333H10.8V11.5833C10.8 12.5484 9.99263 13.3333 9 13.3333ZM9 11C9 11.3223 8.7315 11.5833 8.4 11.5833H3.6C3.2685 11.5833 3 11.3223 3 11C3 10.6777 3.2685 10.4167 3.6 10.4167H8.4C8.7315 10.4167 9 10.6777 9 11ZM9 8.66667C9 8.98896 8.7315 9.25 8.4 9.25H3.6C3.2685 9.25 3 8.98896 3 8.66667C3 8.34437 3.2685 8.08333 3.6 8.08333H8.4C8.7315 8.08333 9 8.34437 9 8.66667ZM3 6.33333C3 6.01104 3.2685 5.75 3.6 5.75H4.8C5.1315 5.75 5.4 6.01104 5.4 6.33333C5.4 6.65562 5.1315 6.91667 4.8 6.91667H3.6C3.2685 6.91667 3 6.65562 3 6.33333Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_781_1088">
                      <rect width="12" height="14" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {!tool.remarkPluginFrontmatter.noAdditionalInfo && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 14.5714C11.6286 14.5714 14.5714 11.6286 14.5714 8C14.5714 4.37143 11.6286 1.42857 8 1.42857C4.37143 1.42857 1.42857 4.37143 1.42857 8C1.42857 11.6286 4.37143 14.5714 8 14.5714ZM8 16C12.4171 16 16 12.4171 16 8C16 3.58286 12.4171 0 8 0C3.58286 0 0 3.58286 0 8C0 12.4171 3.58286 16 8 16Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 6.35429C8.39429 6.35429 8.71429 6.67429 8.71429 7.06857V11.64C8.71429 12.0343 8.39429 12.3543 8 12.3543C7.60571 12.3543 7.28571 12.0343 7.28571 11.64V7.06857C7.28571 6.67429 7.60571 6.35429 8 6.35429Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8 5.06857C8.39449 5.06857 8.71429 4.74878 8.71429 4.35429C8.71429 3.9598 8.39449 3.64 8 3.64C7.60551 3.64 7.28571 3.9598 7.28571 4.35429C7.28571 4.74878 7.60551 5.06857 8 5.06857Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </div>
            <div className="mb-[7px]">
              {tool.remarkPluginFrontmatter.category.map((category, index) => (
                <span key={index} className={styles.category}>
                  {category}
                </span>
              ))}
            </div>
            <LinesEllipsis
              className={styles.toolDescription}
              text={tool.remarkPluginFrontmatter.excerpt}
              maxLine={tool.id === selectedTool?.id ? 100 : 1}
              ellipsis={
                <>
                  &thinsp;...&thinsp;<span className="underline text-[#ABABAB] dark:text-[#5b5b5b]">more</span>
                </>
              }
              basedOn="words"
              onReflow={handleReflow}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default List
