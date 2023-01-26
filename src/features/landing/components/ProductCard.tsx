/** @jsxImportSource preact */
import { clsx } from "~/lib"

import { VideoPlayerIcon } from "../assets/VideoPlayerIcon"
import { LinkTuple } from "../types"
import productCard from "./ProductCard.module.css"

export type ProductCardProps = {
  title: string
  description: string
  image: string
  learnMorelink: string
  links: LinkTuple[]
  chains: { id: string; title: string }[]
  video: string
}

export const ProductCard = (props: ProductCardProps) => {
  return (
    <section class={clsx("card", productCard.productCard)}>
      <div class={clsx(productCard.firstCol)}>
        <img src={props.image} width={64} height={64} alt={`Scroll ${props.title}`} />
        <div class={productCard.ctaCol}>
          <h4>
            <a href={props.learnMorelink} class="product-card-title">
              {props.title}
            </a>
          </h4>
          <p>{props.description}</p>
        </div>
      </div>
      <div class={productCard.linksWrapper}>
        <div class={productCard.links}>
          {props.links.map((link) => (
            <div>
              <a href={link[1]}>{link[0]}</a>
            </div>
          ))}
          <div class={productCard.separator} />
          {props.video && (
            <div>
              <a href={props.video} target="_blank">
                <VideoPlayerIcon /> Video tutorials
              </a>
            </div>
          )}
        </div>
      </div>
      {props.chains && (
        <div>
          <div class={productCard.networks}>
            <h6 class="paragraph-100-bold">Available on:</h6>
            <div class={productCard.chainsWrapper}>
              {props.chains.map((chain) => (
                <img src={`/assets/chains/${chain.id}.svg`} class={productCard.chainIcon} title={chain.title} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
