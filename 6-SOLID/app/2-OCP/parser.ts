type ParserNode = {
  type: "title" | "paragraph";
  text: string;
};

const nodes: ParserNode[] = [
  { type: "title", text: "Hello World" },
  { type: "paragraph", text: "This is a simple paragraph." },
];


interface Formatter {
  format(nodes: ParserNode[]): string;
}

class TextFormatter implements Formatter {
  format(nodes: ParserNode[]): string {
    let text = "";
     for (const node of nodes) {
        text += `${node.text}\n\n`;
      }
      return text;
  }
}

class HtmlFormatter implements Formatter {
  format(nodes: ParserNode[]): string {
    let text = "";

     for (const node of nodes) {
        if (node.type === "title") {
          text += `<h1>${node.text}</h1>\n`;
        } else if (node.type === "paragraph") {
          text += `<p>${node.text}</p>\n`;
        }
      }
      return text;
  }
}

class Sender {
  sendByMail(to: string, formatter: Formatter, nodes: ParserNode[]): void {


    console.log(`Sending mail to: ${to}`);
    console.log("Content:");
    console.log(formatter.format(nodes));
    console.log("Mail sent!");
  }
}

// Exemple d'utilisation
const sender = new Sender();
const textFormatter = new TextFormatter();
const htmlFormatter = new HtmlFormatter();

sender.sendByMail("test@mail.com", textFormatter, nodes);
sender.sendByMail("test@mail.com", htmlFormatter, nodes);
