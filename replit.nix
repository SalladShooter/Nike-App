{ pkgs }: {
    deps = [
      pkgs.azure-functions-core-tools
      pkgs.unzip
      pkgs.unzipNLS
        pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
    ];
}