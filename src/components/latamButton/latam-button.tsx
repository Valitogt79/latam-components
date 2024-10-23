import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'latam-button',
  styleUrl: 'latam-button.css',
  shadow: true,
})
export class LatamButton {
  @Prop() href: string;

  @Prop() content: string;

  @Prop() customStyles?: string;

  render() {
    return (
      <a class={`bg-primary-color rounded-[25px] text-white block h-fit p-4 w-fit no-underline shadow-md ${this.customStyles}`} href={this.href}>
        {this.content}
      </a>
    );
  }
}
