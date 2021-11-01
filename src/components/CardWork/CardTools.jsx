import React from "react"

const CardTools = ({ tools, toolsId }) => {
  return (
    <>
      {tools.map((tool, index) => (
        <li className="works__item" key={`${index}_${toolsId}`}>
          {tool}
        </li>
      ))}
    </>
  )
}

export default CardTools
