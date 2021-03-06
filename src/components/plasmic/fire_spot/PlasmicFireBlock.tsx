// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iaGC8N7icN64RQS5kdk5ev
// Component: -nqoWOXgpB
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_fire_spot.module.css"; // plasmic-import: iaGC8N7icN64RQS5kdk5ev/projectcss
import * as sty from "./PlasmicFireBlock.module.css"; // plasmic-import: -nqoWOXgpB/css

export type PlasmicFireBlock__VariantMembers = {};

export type PlasmicFireBlock__VariantsArgs = {};
type VariantPropType = keyof PlasmicFireBlock__VariantsArgs;
export const PlasmicFireBlock__VariantProps = new Array<VariantPropType>();

export type PlasmicFireBlock__ArgsType = {};
type ArgPropType = keyof PlasmicFireBlock__ArgsType;
export const PlasmicFireBlock__ArgProps = new Array<ArgPropType>();

export type PlasmicFireBlock__OverridesType = {
  root?: p.Flex<"div">;
  background3?: p.Flex<"div">;
  title5?: p.Flex<"div">;
  title6?: p.Flex<"div">;
  body3?: p.Flex<"div">;
  ghostDefaultLight3?: p.Flex<"div">;
};

export interface DefaultFireBlockProps {
  className?: string;
}

function PlasmicFireBlock__RenderFunc(props: {
  variants: PlasmicFireBlock__VariantsArgs;
  args: PlasmicFireBlock__ArgsType;
  overrides: PlasmicFireBlock__OverridesType;
  dataFetches?: PlasmicFireBlock__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"background3"}
        data-plasmic-override={overrides.background3}
        className={classNames(defaultcss.all, sty.background3)}
      />

      <div
        data-plasmic-name={"title5"}
        data-plasmic-override={overrides.title5}
        className={classNames(defaultcss.all, sty.title5)}
      >
        <div
          data-plasmic-name={"title6"}
          data-plasmic-override={overrides.title6}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.title6
          )}
        >
          {"Fire Name/Location"}
        </div>
      </div>

      <div
        data-plasmic-name={"body3"}
        data-plasmic-override={overrides.body3}
        className={classNames(defaultcss.all, defaultcss.__wab_text, sty.body3)}
      >
        {"Date:\nTime:\nSource:\nReported by: (Person or ML)"}
      </div>

      <div
        data-plasmic-name={"ghostDefaultLight3"}
        data-plasmic-override={overrides.ghostDefaultLight3}
        className={classNames(defaultcss.all, sty.ghostDefaultLight3)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "background3",
    "title5",
    "title6",
    "body3",
    "ghostDefaultLight3"
  ],
  background3: ["background3"],
  title5: ["title5", "title6"],
  title6: ["title6"],
  body3: ["body3"],
  ghostDefaultLight3: ["ghostDefaultLight3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  background3: "div";
  title5: "div";
  title6: "div";
  body3: "div";
  ghostDefaultLight3: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFireBlock__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFireBlock__VariantsArgs;
    args?: PlasmicFireBlock__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFireBlock__Fetches;
  } & Omit<PlasmicFireBlock__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFireBlock__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFireBlock__ArgProps,
      internalVariantPropNames: PlasmicFireBlock__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFireBlock__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFireBlock";
  } else {
    func.displayName = `PlasmicFireBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicFireBlock = Object.assign(
  // Top-level PlasmicFireBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    background3: makeNodeComponent("background3"),
    title5: makeNodeComponent("title5"),
    title6: makeNodeComponent("title6"),
    body3: makeNodeComponent("body3"),
    ghostDefaultLight3: makeNodeComponent("ghostDefaultLight3"),

    // Metadata about props expected for PlasmicFireBlock
    internalVariantProps: PlasmicFireBlock__VariantProps,
    internalArgProps: PlasmicFireBlock__ArgProps
  }
);

export default PlasmicFireBlock;
/* prettier-ignore-end */
