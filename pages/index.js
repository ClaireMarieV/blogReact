import React from "react";
import Picture from "../components/picture";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Index from "../components/index";

import ArticleSplash from "../components/articleSplash";

import acid from "../data/style/acid";
import rustique from "../data/style/rustique";
import grunge from "../data/style/simpleGrunge";
import desir from "../data/shoes/desir";
import mango from "../data/shoes/mangoBottega";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Index>
      <div className="index">
        <div id="title">
          <div>
            <h1>IL ÉTAIT UNE FOIS</h1>
          </div>
        </div>
        <ArticleSplash
          category={grunge.category}
          title={grunge.title}
          picture={grunge.picture}
        />
        <ArticleSplash
          category={rustique.category}
          title={rustique.title}
          picture={rustique.picture}
        />
        <ArticleSplash
          category={desir.category}
          title={desir.title}
          date={acid.date}
          picture={desir.picture}
        />
        <ArticleSplash
          category={acid.category}
          title={acid.title}
          picture={acid.picture}
        />
        <ArticleSplash
          category={mango.category}
          title={mango.title}
          picture={mango.picture}
        />
      </div>
    </Index>
    <style jsx global>{`
      .index #title {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 6;
        padding: 0 6rem 0 6rem;
      }
      #title h1 {
        font-size: 7vw;
        font-weight: 700;
        line-height: 16vw;
      }
      @media (min-width: 300px) and (max-width: 623px) {
        .index #title {
          padding: 0 2rem 0 2rem;
          height: 30vh;
        }
      }
    `}</style>
  </Layout>
);

export default IndexPage;
