// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jQ7C9UCBVFKtVavnx5pEyp
// Component: B24pjWSaNDbx
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: jQ7C9UCBVFKtVavnx5pEyp/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: B24pjWSaNDbx/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <DataFetcher
              data-plasmic-name={"httpApiFetcher"}
              data-plasmic-override={overrides.httpApiFetcher}
              className={classNames("__wab_instance", sty.httpApiFetcher)}
              dataName={"fetchedData"}
              errorDisplay={
                <ph.DataCtxReader>
                  {$ctx => "Error fetching data"}
                </ph.DataCtxReader>
              }
              headers={{
                "Content-Type": "application/json",
                Accept: "application/json"
              }}
              loadingDisplay={
                <ph.DataCtxReader>{$ctx => "Loading..."}</ph.DataCtxReader>
              }
              method={"GET"}
              noLayout={false}
              url={"https://dummyjson.com/products"}
            >
              <ph.DataCtxReader>
                {$ctx =>
                  (
                    (() => {
                      try {
                        return $ctx.fetchedData.products;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return [];
                        }
                        throw e;
                      }
                    })() ?? []
                  ).map((currentItem, currentIndex) => (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__oNsHp)}
                      key={currentIndex}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__ich3O
                        )}
                      >
                        <p.PlasmicImg
                          data-plasmic-name={"img"}
                          data-plasmic-override={overrides.img}
                          alt={""}
                          className={classNames(sty.img)}
                          displayHeight={"auto"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"100%"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"auto"}
                          loading={"lazy"}
                          src={(() => {
                            try {
                              return currentItem.thumbnail;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                        />

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ii2Xf
                          )}
                        >
                          {(() => {
                            try {
                              return currentItem.title;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "Enter some text";
                              }
                              throw e;
                            }
                          })()}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tiiNj
                          )}
                        >
                          {(() => {
                            try {
                              return currentItem.price;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "Enter some text";
                              }
                              throw e;
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                  ))
                }
              </ph.DataCtxReader>
            </DataFetcher>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "section", "httpApiFetcher", "img"],
  section: ["section", "httpApiFetcher", "img"],
  httpApiFetcher: ["httpApiFetcher", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    httpApiFetcher: makeNodeComponent("httpApiFetcher"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
