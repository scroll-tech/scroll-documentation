import styles from "./Content.module.css"
import { clsx } from "~/lib"
import { useState, useEffect, useMemo } from "preact/hooks"
import SearchInput from "./Search/SearchInput"
import NetworkSelector from "./NetworkSelector/NetworkSelector"
import Category from "./Category/Category"
import List from "./List/List"
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo"

const Content = ({ tools, toolsMarkdown }) => {
  const categories = [...new Set(tools.flatMap((tool) => tool.remarkPluginFrontmatter.category))]

  const [selectedTool, setSelectedTool] = useState(null)

  const [searchParams, setSearchParams] = useState({
    category: [],
    network: "All networks",
    keyword: "",
  })

  const handleChangeCategory = (value) => {
    setSearchParams((prev) => {
      const newCategory = prev.category.includes(value)
        ? prev.category.filter((item) => item !== value)
        : [...prev.category, value]

      return {
        ...prev,
        category: newCategory,
      }
    })
  }

  const handleChangeNetwork = (value) => {
    setSearchParams((pre) => ({
      ...pre,
      network: value,
    }))
  }

  const handleChangeKeyword = (e) => {
    setSearchParams((prev) => ({
      ...prev,
      keyword: e.target.value,
    }))
  }

  const handleToolClick = (blog) => {
    setSelectedTool(blog)
  }

  useEffect(() => {
    if (selectedTool) {
      document.querySelectorAll(".tools-item").forEach((div) => {
        div.style.display = "none"
      })
      const selectedDiv = document.getElementById(selectedTool.id)
      if (selectedDiv) {
        selectedDiv.style.display = "block"
      }
    }
  }, [selectedTool])

  const filteredTools = useMemo(() => {
    // setSelectedTool(null)
    return tools.filter((tool) => {
      const categoryMatch =
        searchParams.category.length === 0 ||
        searchParams.category.some((category) => tool.remarkPluginFrontmatter.category.includes(category))
      const networkMatch =
        searchParams.network === "All networks" || tool.remarkPluginFrontmatter.network.includes(searchParams.network)
      const keywordMatch = tool.remarkPluginFrontmatter.name.toLowerCase().includes(searchParams.keyword.toLowerCase())

      return categoryMatch && networkMatch && keywordMatch
    })
  }, [searchParams])

  return (
    <div className={clsx(styles.toolsContainer, 'bg-white dark:bg-dark-normal')}>
      <Category categories={categories} value={searchParams.category} onChange={handleChangeCategory} />
      <div className="flex">
        <SearchInput value={searchParams.keyword} onChange={handleChangeKeyword} />
        <NetworkSelector value={searchParams.network} onChange={handleChangeNetwork} />
      </div>

      <div className={clsx(styles.toolsList)}>
        <List tools={filteredTools} onChange={handleToolClick} selectedTool={selectedTool} />
        <AdditionalInfo onClose={() => handleToolClick(null)} data={toolsMarkdown} selectedTool={selectedTool} />
      </div>
    </div>
  )
}

export default Content
