{ nixpkgs ? import ./nix/nixos-19-09.nix }:
let
  overlay = self: super: {
    myHaskellPackages = 
      super.haskell.packages.ghc865.override (old: {
        overrides = self.lib.composeExtensions (old.overrides or (_: _: {})) 
          (hself: hsuper: {
            ghc = hsuper.ghc // { withPackages = hsuper.ghc.withHoogle; };
            ghcWithPackages = hself.ghc.withPackages;
          });
      });
  };

  pkgs = import nixpkgs {
    overlays = [overlay];
  };

  drv = pkgs.myHaskellPackages.callCabal2nix "dashboard-server" ./dashboard-server.cabal {};

  drvWithTools = drv.env.overrideAttrs (
    old: with pkgs.myHaskellPackages; {
      nativeBuildInputs = old.nativeBuildInputs ++ [
        ghcid
        # Add other development tools like ormolu here
      ];
      shellHook = ''
         source .config/secrets     '';
      }
  );
in
  drvWithTools