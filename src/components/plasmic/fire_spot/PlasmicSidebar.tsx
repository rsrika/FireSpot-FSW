// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iaGC8N7icN64RQS5kdk5ev
// Component: 4dji5oGoR6
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
import * as sty from "./PlasmicSidebar.module.css"; // plasmic-import: 4dji5oGoR6/css

export type PlasmicSidebar__VariantMembers = {};

export type PlasmicSidebar__VariantsArgs = {};
type VariantPropType = keyof PlasmicSidebar__VariantsArgs;
export const PlasmicSidebar__VariantProps = new Array<VariantPropType>();

export type PlasmicSidebar__ArgsType = {};
type ArgPropType = keyof PlasmicSidebar__ArgsType;
export const PlasmicSidebar__ArgProps = new Array<ArgPropType>();

export type PlasmicSidebar__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSidebarProps {
  className?: string;
}

function PlasmicSidebar__RenderFunc(props: {
  variants: PlasmicSidebar__VariantsArgs;
  args: PlasmicSidebar__ArgsType;
  overrides: PlasmicSidebar__OverridesType;
  dataFetches?: PlasmicSidebar__Fetches;
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
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSidebar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSidebar__VariantsArgs;
    args?: PlasmicSidebar__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSidebar__Fetches;
  } & Omit<PlasmicSidebar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSidebar__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSidebar__ArgProps,
      internalVariantPropNames: PlasmicSidebar__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSidebar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSidebar";
  } else {
    func.displayName = `PlasmicSidebar.${nodeName}`;
  }
  return func;
}

export const PlasmicSidebar = Object.assign(
  // Top-level PlasmicSidebar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSidebar
    internalVariantProps: PlasmicSidebar__VariantProps,
    internalArgProps: PlasmicSidebar__ArgProps
  }
);

export default PlasmicSidebar;
/* prettier-ignore-end */
