{ pkgs }: {
  deps = [
    pkgs.mastodon
pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}